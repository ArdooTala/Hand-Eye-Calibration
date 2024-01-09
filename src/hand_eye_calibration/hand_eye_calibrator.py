import json
import pathlib
from datetime import datetime
from hand_eye_calibration import logger
import cv2 as cv
import numpy as np
from scipy.spatial.transform import Rotation


class HandEyeCalibrator:
    def __init__(self, image_loader, robot_loader):
        self.image_loader = image_loader
        self.robot_loader = robot_loader

        self.calibration_model = {
            "r_gripper2base": [],
            "t_gripper2base": [],
            "r_target2cam": [],
            "t_target2cam": []
        }
        self.t_cam2gripper = None
        self.r_cam2gripper = None

    def preprocess_data(self):
        assert self.robot_loader.poses_count == len(self.image_loader.image_files)

        self.calibration_model = {
            "r_gripper2base": [],
            "t_gripper2base": [],
            "r_target2cam": [],
            "t_target2cam": []
        }

        for (img_name, cam_pose), rob_pose in zip(self.image_loader.estimated_poses, self.robot_loader.robot_poses):
            logger.info(f"Preprocessing calibration data")
            logger.info(f"IMG: {img_name}")
            logger.info(f"ROB: {rob_pose}")
            logger.info(f"CAM: {cam_pose}")
            # print("-" * 100)
            # print("=" * 200)

            if len(rob_pose) == 7:
                logger.debug("Converting Quaternions to Rotation Matrix")
                rob_pose_rot = Rotation.from_quat(rob_pose[3:]).as_matrix()
            elif len(rob_pose) == 6:
                logger.debug("Converting Axis-Angle to Rotation Matrix")
                rob_pose_rot = Rotation.from_rotvec(rob_pose[3:]).as_matrix()
            else:
                logger.warning("Rotation format not recognized!")
                continue

            logger.debug(f"rob_rot: {rob_pose_rot}")

            self.calibration_model["r_target2cam"].append(cam_pose[0])
            self.calibration_model["t_target2cam"].append(cam_pose[1])
            self.calibration_model["r_gripper2base"].append(rob_pose_rot)
            self.calibration_model["t_gripper2base"].append(rob_pose[:3])
            # print("___")

        logger.info(f"r_target2cam   : {len(self.calibration_model['r_target2cam'])} rotation entries created.")
        logger.info(f"t_target2cam   : {len(self.calibration_model['t_target2cam'])} translation entries created.")
        logger.info(f"r_gripper2base : {len(self.calibration_model['r_gripper2base'])} rotation entries created.")
        logger.info(f"t_gripper2base : {len(self.calibration_model['t_gripper2base'])} translation entries created.")

    def calibrate_hand_eye(self):
        logger.info(f"Calibrating on {len(list(self.calibration_model.values())[0])} images . . .")
        r_cam2gripper, t_cam2gripper = cv.calibrateHandEye(
            np.array(self.calibration_model["r_gripper2base"]),
            np.array(self.calibration_model["t_gripper2base"]),
            np.array(self.calibration_model["r_target2cam"]),
            np.array(self.calibration_model["t_target2cam"]),
            cv.CALIB_HAND_EYE_DANIILIDIS  # cv.CALIB_HAND_EYE_TSAI
        )

        self.r_cam2gripper = r_cam2gripper
        self.t_cam2gripper = t_cam2gripper

        print("#" * 150)
        print(f"Rotation Matrix:\n{self.r_cam2gripper}")
        print(f"Rotation Vector:\n{Rotation.from_matrix(self.r_cam2gripper).as_rotvec()}")
        print(f"Translation Vector:\n{self.t_cam2gripper}")

        return r_cam2gripper, t_cam2gripper

    def write_hand_eye_transform(self, save_path=None):
        from hand_eye_calibration._encoder import NumpyEncoder

        if not save_path:
            save_path = pathlib.Path.cwd()

        output_file = save_path / f"HandEyeCalibration_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
        with open(output_file, 'w') as f:
            json.dump({"rvec": self.r_cam2gripper, "tvec": self.t_cam2gripper}, f, indent=2, cls=NumpyEncoder)

        return output_file
