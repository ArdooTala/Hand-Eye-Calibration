import yaml
from pathlib import Path
import cv2
import numpy as np
from hand_eye_calibration import logger
from hand_eye_calibration.image_processing.camera_model import CameraModel


class CharucoDetector:
    def __init__(self, charuco_parameters, verbose=False):
        self.verbose = verbose
        self._image_files = None
        self._images_dir = None
        self.camera = None
        self.board = None
        self._aruco_dict = None

        if not isinstance(charuco_parameters, dict):
            try:
                charuco_parameters_file = Path(charuco_parameters)
                logger.info(f"Reading CharucoBoard parameters from file: {charuco_parameters_file}")
                with open(charuco_parameters_file) as charuco_params_yaml:
                    charuco_parameters = yaml.safe_load(charuco_params_yaml)
            except TypeError:
                raise Exception("charuco_parameters could not be interpreted as a dict or a path to a yaml file")

        if not charuco_parameters:
            raise Exception("charuco_parameters not found")

        self._load_charuco_board(charuco_parameters)

    def _load_charuco_board(self, charuco_params):
        assert all(x in charuco_params for x in [
            "num_X", "num_Y",
            "len_squares", "len_markers",
            "markers_dictionary"
        ]), "CharucoBoard dict does not include all the required keys"

        dict_name = charuco_params["markers_dictionary"]
        logger.debug(f"Using ARUCO dictionary: [{dict_name}]")

        aruco_dict = cv2.aruco.getPredefinedDictionary(dict_name)
        board = cv2.aruco.CharucoBoard(
            (charuco_params["num_X"], charuco_params["num_Y"]),
            charuco_params["len_squares"],
            charuco_params["len_markers"],
            aruco_dict,
        )

        if self.verbose:
            board_img = board.generateImage(np.array(board.getChessboardSize()) * 70)
            cv2.imshow("Board", board_img)

        self.board = board
        self._aruco_dict = aruco_dict

        return board, aruco_dict

    def load_images(self, imgs_dir, extension='jpg'):
        self._images_dir = Path(imgs_dir)
        self._image_files = sorted(self._images_dir.glob(f"*.{extension}"))

    @property
    def image_files(self):
        return self._image_files

    @property
    def images(self):
        for img_file in self._image_files:
            img = None
            try:
                img = cv2.imread(str(img_file))
            except Exception as e:
                logger.warning(f"Could not read the image: {img_file}")
                logger.error(e)
            yield img_file, img

    @property
    def detected_markers(self):
        for file, img in self.images:
            detected = self.get_detected_marker(img)
            if self.verbose and not detected:
                logger.warning("Not able to detect a charuco board in image: {}".format(file))
            yield file, detected

        # return (self.get_detected_marker(img) for file, img in self.images if img is not None)

    def get_detected_marker(self, img):
        if img is None:
            return None

        gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        corners, ids, _ = cv2.aruco.detectMarkers(gray, self._aruco_dict)

        img = cv2.aruco.drawDetectedMarkers(img, corners)

        response, charuco_corners, charuco_ids = cv2.aruco.interpolateCornersCharuco(
            markerCorners=corners,
            markerIds=ids,
            image=gray,
            board=self.board,
        )

        if response < 10:
            logger.warning(f"Not able to detect enough markers in the image ({response}/10)")
            return None

        img = cv2.aruco.drawDetectedCornersCharuco(img, charuco_corners, charuco_ids)

        if self.verbose:
            cv2.imshow('Charuco board', img)
            cv2.waitKey(0)

        return charuco_corners, charuco_ids

    @property
    def estimated_poses(self):
        if self.camera is None:
            raise Exception("Camera not defined!")

        for file, img in self.images:
            yield file, self.get_estimated_pose(img, self.camera.camera_matrix, self.camera.dist_coeff)

    def get_estimated_pose(self, image, camera_matrix, dist_coeff):
        if image is None:
            return None

        frame = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
        corners, ids, rejected_points = cv2.aruco.detectMarkers(frame, self._aruco_dict)

        if corners is None or ids is None:
            return None
        if len(corners) != len(ids) or len(corners) == 0:
            return None

        output = None
        if self.verbose:
            output = cv2.aruco.drawDetectedMarkers(image, corners)  # , ids)

        try:
            ret, c_corners, c_ids = cv2.aruco.interpolateCornersCharuco(corners, ids, frame, self.board)

            if self.verbose:
                output = cv2.aruco.drawDetectedCornersCharuco(output, c_corners)  # , c_ids)

            if ret < 10:
                if self.verbose:
                    cv2.imshow("Kir", cv2.resize(output, None, fx=0.5, fy=0.5))
                    cv2.waitKey(0)
                return None

            rvec = (0, 0, 0)
            tvec = (0, 0, 0)
            ret, p_rvec, p_tvec = cv2.aruco.estimatePoseCharucoBoard(
                c_corners, c_ids, self.board, camera_matrix, dist_coeff, rvec, tvec)

            if self.verbose:
                logger.info('Translation:\n{0}'.format(p_tvec))
                logger.info('Rotation:\n{0}'.format(p_rvec))
                logger.info('Distance from cameras:\t{0} m'.format(np.linalg.norm(p_tvec)))

            if p_rvec is None or p_tvec is None:
                if self.verbose:
                    cv2.imshow("Kir", cv2.resize(output, None, fx=0.5, fy=0.5))
                    cv2.waitKey(0)
                return None
            if np.isnan(p_rvec).any() or np.isnan(p_tvec).any():
                if self.verbose:
                    cv2.imshow("Kir", cv2.resize(output, None, fx=0.5, fy=0.5))
                    cv2.waitKey(0)
                return None

            if self.verbose:
                output = cv2.drawFrameAxes(output, camera_matrix, dist_coeff, p_rvec, p_tvec, 0.1)

        except cv2.error as e:
            logger.error(e)
            return None

        if self.verbose:
            cv2.imshow("Kir", cv2.resize(output, None, fx=0.5, fy=0.5))
            cv2.waitKey(1)

        return p_rvec, p_tvec

    def auto_detect_camera_parameters(self):
        self.camera = CameraModel()
        self.camera.auto_detect_camera_from_images(self)
