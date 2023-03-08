from datetime import datetime
import cv2
import json
import pathlib
import numpy as np

from eye_in_hand import logger


class CameraModel:
    def __init__(self):
        self.camera_matrix = None
        self.dist_coeff = None
        self.image_size = None

    def load_camera_calibration(self, camera_calibration):
        with open(camera_calibration) as camera_calibration_json:
            camera_params = json.load(camera_calibration_json)
            f = camera_params["Focal Length"]
            c = camera_params["Principal Point"]
            camera_matrix = self._camera_matrix_from_intrinsics(f, c)
            print("Camera Matrix:\n", camera_matrix)

            dist_coeff = np.array(camera_params["Distortion Coefficients"])
            print("Camera Distortion Coefficients:\n", dist_coeff)

        self.camera_matrix, self.dist_coeff = camera_matrix, dist_coeff
        return camera_matrix, dist_coeff

    def auto_detect_camera_from_images(self, detector):
        self._set_image_size(detector.images)
        self._calibrate_camera(detector.detected_markers, detector.board)

    def _set_image_size(self, images):
        # Set Image Size
        for f, image in images:
            if not self.image_size:
                self.image_size = image.shape[1::-1]
                logger.info(f"Image Resolution: {self.image_size}")

            elif self.image_size != image.shape[1::-1]:
                raise Exception("Images are not of the same size")

    def _calibrate_camera(self, detected_markers, board):
        corners_all = []
        ids_all = []
        for f, marker in detected_markers:
            if not marker:
                continue

            charuco_corners, charuco_ids = marker

            corners_all.append(charuco_corners)
            ids_all.append(charuco_ids)

        if not self.image_size:
            logger.error(
                "Calibration was unsuccessful. Image size not set.")
            return

        calibration, camera_matrix, dist_coeffs, rvecs, tvecs = cv2.aruco.calibrateCameraCharuco(
            charucoCorners=corners_all,
            charucoIds=ids_all,
            board=board,
            imageSize=self.image_size,
            cameraMatrix=None,
            distCoeffs=None)

        logger.info(f"Camera Matrix:\n{camera_matrix}")
        logger.info(f"Dist_Coeffs:\n{dist_coeffs}")

        self.camera_matrix = camera_matrix
        self.dist_coeff = dist_coeffs[0]

    def write_camera_calibration(self, save_path=None):
        calibration_result = {
            "Timestamp": datetime.now().isoformat(),
            "Image Size": self.image_size,
            "Principal Point": [self.camera_matrix[0][2], self.camera_matrix[1][2]],
            "Focal Length": [self.camera_matrix[0][0], self.camera_matrix[1][1]],
            "Distortion Coefficients": self.dist_coeff.tolist()
        }

        if not save_path:
            save_path = pathlib.Path.cwd()

        output_file = save_path / f"CameraCalibration_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
        with open(output_file, 'w') as file:
            json.dump(calibration_result, file, indent=2)

        return output_file

    @staticmethod
    def _camera_matrix_from_intrinsics(f, c):
        return np.array([
            [f[0], 0, c[0]],
            [0, f[1], c[1]],
            [0, 0, 1]
        ])
