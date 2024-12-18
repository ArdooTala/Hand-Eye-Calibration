import json
import pathlib
from datetime import datetime
from hand_eye_calibration import logger
import cv2
import numpy as np
from scipy.spatial.transform import Rotation

from hand_eye_calibration.robot_model.base_robot_model import RobotModel


class HandEyeCalibrator:
    def __init__(self, image_loader, robot_loader):
        self.image_loader = image_loader
        self.robot_loader = robot_loader
        self.calibration_data = None

        self.load_calibration_data(image_loader, robot_loader)
        self.t_cam2gripper = None
        self.r_cam2gripper = None

    def load_calibration_data(self, image_poses, robot_poses):
        assert len(robot_poses) == image_poses.images_count

        cal_data = []
        for (img_id, cam_pose), rob_pose in zip(image_poses.estimated_poses, robot_poses):
            logger.info(f"IMG: {img_id}")
            logger.debug(f"CAM: {cam_pose}")
            logger.debug(f"ROB: {rob_pose}")

            if not rob_pose:
                logger.warning(f"Robot pose does not exist")
                continue

            if not cam_pose:
                logger.warning(f"Camera pose does not exist")
                continue

            cal_data.append(np.array((cv2.Rodrigues(rob_pose[0])[0], rob_pose[1], cam_pose[0], cam_pose[1])))

        self.calibration_data = np.stack(cal_data, axis=1)

    def calibrate_hand_eye(self):
        logger.info(f"Calibrating on {self.calibration_data.shape[1]} images . . .")
        print(self.calibration_data.shape)
        self.r_cam2gripper, self.t_cam2gripper = cv2.calibrateHandEye(*self.calibration_data,
                                                                      cv2.CALIB_HAND_EYE_DANIILIDIS)
        # self.r_cam2gripper, self.t_cam2gripper = cv2.calibrateHandEye(*data, cv.CALIB_HAND_EYE_TSAI)

        logger.info("#" * 150)
        logger.info(f"Rotation Matrix:\n{self.r_cam2gripper}")
        logger.info(f"Translation Vector:\n{self.t_cam2gripper}")

        return self.r_cam2gripper, self.t_cam2gripper

    def write_hand_eye_transform(self, save_path=None):
        from hand_eye_calibration._encoder import NumpyEncoder

        if not save_path:
            save_path = pathlib.Path.cwd()

        output_file = save_path / f"{datetime.now().strftime('%Y%m%d_%H%M%S')}-HandEyeCalibration.json"
        with open(output_file, 'w') as f:
            json.dump({"rvec": self.r_cam2gripper, "tvec": self.t_cam2gripper}, f, indent=2, cls=NumpyEncoder)

        return output_file

    # Convert to Property
    def get_hand_eye_coordinates(self, as_matrix=False):
        if as_matrix:
            return self.r_cam2gripper, self.t_cam2gripper

        if isinstance(self.robot_loader, RobotModel):
            r_cam = self.robot_loader.matrix_to_rotation(self.r_cam2gripper)
            return r_cam, self.t_cam2gripper
