import yaml
from pathlib import Path
import cv2
import numpy as np
from hand_eye_calibration import logger
from hand_eye_calibration.image_processing.camera_model import CameraModel
from hand_eye_calibration.image_processing.image_loader import ImageLoader


class CharucoDetector(ImageLoader):
    def __init__(self, charuco_parameters, camera_model=None, verbose=False):
        super().__init__(verbose)
        self._camera = None
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

        if camera_model is not None:
            self.camera_model = camera_model

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

    @property
    def detected_markers(self):
        for file, img in self.images:
            logger.info(f"Detecting Markers > {file}")
            yield file, self._detect_marker(img)

    def _detect_marker(self, img):
        if img is None:
            return None

        gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        corners, ids, _ = cv2.aruco.detectMarkers(gray, self._aruco_dict)
        response, charuco_corners, charuco_ids = cv2.aruco.interpolateCornersCharuco(
            markerCorners=corners,
            markerIds=ids,
            image=gray,
            board=self.board,
        )

        if response < 10:
            logger.warning(f"Not able to detect enough markers in the image ({response}/10)")
            return None

        if self.verbose:
            self._draw_markers(gray, corners, board_corners=charuco_corners)

        return charuco_corners, charuco_ids

    @property
    def estimated_poses(self):
        for file, img in self.images:
            logger.info(f"Estimating Marker Pose > {file}")
            yield file, self._estimate_pose(img)

    def _estimate_pose(self, image):
        if image is None:
            return None

        frame = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
        corners, ids, rejected_points = cv2.aruco.detectMarkers(frame, self._aruco_dict)

        if corners is None or ids is None:
            return None
        if len(corners) != len(ids) or len(corners) == 0:
            return None

        try:
            ret, c_corners, c_ids = cv2.aruco.interpolateCornersCharuco(corners, ids, frame, self.board)
            assert ret > 9

            ret, p_rvec, p_tvec = cv2.aruco.estimatePoseCharucoBoard(
                c_corners, c_ids,
                self.board,
                self.camera_model.camera_matrix, self.camera_model.dist_coeff,
                np.empty(1), np.empty(1)
            )

            logger.debug(f'Charuco Board Estimated Pose:\nTranslation:\n{p_tvec}\nRotation:\n{p_rvec}')
            logger.debug(f'Charuco Board distance from cameras:\t{np.linalg.norm(p_tvec)} m')

            if p_rvec is None or p_tvec is None:
                return None
            if np.isnan(p_rvec).any() or np.isnan(p_tvec).any():
                return None

        except cv2.error as e:
            logger.error(f"Charuco Board Pose Estimation Failed\n{e}")
            return None

        if self.verbose:
            self._draw_markers(frame, corners, board_corners=c_corners, frame_transform=(p_rvec, p_tvec))

        return p_rvec, p_tvec

    @property
    def camera_model(self):
        if not self._camera:
            logger.info(f"Camera Model not set. Estimating Camera from images")
            self._camera = CameraModel()
            self._camera.auto_detect_camera_from_images(self)

        return self._camera

    @camera_model.setter
    def camera_model(self, camera):
        assert isinstance(camera, CameraModel)
        self._camera = camera

    def _draw_markers(self, frame, marker_corners, board_corners=None, ids=None, frame_transform=None):
        output = frame.copy()
        output = cv2.cvtColor(output, cv2.COLOR_GRAY2BGR)
        output = cv2.aruco.drawDetectedMarkers(output, marker_corners, ids)

        if board_corners is not None:
            output = cv2.aruco.drawDetectedCornersCharuco(output, board_corners)  # , c_ids)

        if frame_transform is not None:
            output = cv2.drawFrameAxes(
                output,
                self.camera_model.camera_matrix, self.camera_model.dist_coeff,
                *frame_transform,
                0.1
            )

        cv2.imshow("Detected Markers", cv2.resize(output, None, fx=1, fy=1))
        cv2.waitKey(0)
