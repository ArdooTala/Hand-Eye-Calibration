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

        self._calibration_model = {
            "r_gripper2base": [],
            "t_gripper2base": [],
            "r_target2cam": [],
            "t_target2cam": []
        }
        self.t_cam2gripper = None
        self.r_cam2gripper = None

    def _validate_data(self, img_name, cam_pose, rob_pose):
        logger.debug(f"IMG: {img_name}")
        logger.debug(f"CAM: {cam_pose}")
        logger.debug(f"ROB: {rob_pose}")

        if not rob_pose:
            logger.warning(f"Robot pose does not exist")
            return None

        if not cam_pose:
            logger.warning(f"Camera pose does not exist")
            return None

        rob_pose_r = cv2.Rodrigues(rob_pose[0])[0]
        return np.array((rob_pose_r, rob_pose[1], cam_pose[0], cam_pose[1]))

    def preprocess_data(self):
        self._calibration_model = {
            "r_gripper2base": [],
            "t_gripper2base": [],
            "r_target2cam": [],
            "t_target2cam": []
        }

        for (img_name, cam_pose), rob_pose in zip(self.image_loader.estimated_poses, self.robot_loader):
            logger.debug(f"IMG: {img_name}")
            logger.debug(f"CAM: {cam_pose}")
            logger.debug(f"ROB: {rob_pose}")

            print(self._validate_data(img_name, cam_pose, rob_pose).shape)

            logger.info(cam_pose[0].shape)
            logger.info(cam_pose[1].shape)
            logger.info(rob_pose[0].shape)
            logger.info(rob_pose[1].shape)
            logger.info(cv2.Rodrigues(rob_pose[0]))
            if not rob_pose:
                logger.warning(f"Robot pose does not exist")
                continue

            if not cam_pose:
                logger.warning(f"Camera pose does not exist")
                continue

            self._calibration_model["r_target2cam"].append(cam_pose[0])
            self._calibration_model["t_target2cam"].append(cam_pose[1])
            self._calibration_model["r_gripper2base"].append(rob_pose[0])
            self._calibration_model["t_gripper2base"].append(rob_pose[1])

        logger.info(f"r_target2cam   : {len(self._calibration_model['r_target2cam'])} rotation entries created.")
        logger.info(f"t_target2cam   : {len(self._calibration_model['t_target2cam'])} translation entries created.")
        logger.info(f"r_gripper2base : {len(self._calibration_model['r_gripper2base'])} rotation entries created.")
        logger.info(f"t_gripper2base : {len(self._calibration_model['t_gripper2base'])} translation entries created.")

    def calibrate_hand_eye(self):
        logger.info(f"Calibrating on {len(list(self._calibration_model.values())[0])} images . . .")
        self.r_cam2gripper, self.t_cam2gripper = cv2.calibrateHandEye(
            np.array(self._calibration_model["r_gripper2base"]),
            np.array(self._calibration_model["t_gripper2base"]),
            np.array(self._calibration_model["r_target2cam"]),
            np.array(self._calibration_model["t_target2cam"]),
            cv2.CALIB_HAND_EYE_DANIILIDIS  # cv.CALIB_HAND_EYE_TSAI
        )

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
