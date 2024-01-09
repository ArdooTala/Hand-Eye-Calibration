import pathlib

import cv2
import eel
import numpy as np
from scipy.spatial.transform import Rotation

from eye_in_hand.image_processing import detector as det
from eye_in_hand.robot_model import robot_model as rob
from eye_in_hand import hand_eye_calibrator as hec, configs

detector: det = det.Detector(configs.CONFIG_DIR / "charuco_board.json", verbose=False)
robot: rob = rob.RobotModel(manufacturer='UR')
hecalib: hec = hec.HandEyeCalibrator(detector, robot)


@eel.expose
def run_he_cal(rep_type):
    print("Calibrating Hand-Eye")
    hecalib.preprocess_data()
    rvec, tvec = hecalib.calibrate_hand_eye()
    rvec = Rotation.from_matrix(rvec)

    rvec_quat = rvec.as_quat(False)

    if rep_type == "quat":
        rvec = rvec.as_quat(False)
    elif rep_type == "rotvec":
        rvec = rvec.as_rotvec()

    return rvec.flatten().tolist(), tvec.flatten().tolist(), rvec_quat.flatten().tolist()


@eel.expose
def save_cam_cal_res(save_dir):
    save_path = pathlib.Path(save_dir)
    return str(detector.camera.write_camera_calibration(save_path))


@eel.expose
def save_he_res(save_dir):
    save_path = pathlib.Path(save_dir)
    return str(hecalib.write_hand_eye_transform(save_path))


@eel.expose
def parse_robot_program(prg_file):
    global robot

    if not robot:
        return

    robot.parse_robot_program(prg_file)

    poses = []
    for i, pose in enumerate(robot.robot_poses):
        pose_rot = (Rotation.from_rotvec(np.array(pose[3:], dtype=np.float32)).as_quat(False))
        print(pose)
        poses.append(
            (i, pose_rot.flatten().tolist(), pose[:3].flatten().tolist())
        )

    return poses


@eel.expose
def make_detector(images_dir):
    global detector

    if not detector:
        return

    print(f"Getting images from: {images_dir}")
    detector.load_images(images_dir, extension="png")
    for file, img in detector.images:
        print(file)
        cv2.imshow("Image", img)
        cv2.waitKey(5)
    cv2.destroyAllWindows()

    return get_images_list()


@eel.expose
def detect_cam_poses():
    global detector

    if not detector:
        return

    poses = []
    for file, pose in detector.estimated_poses:
        pose_rot = (Rotation.from_rotvec(np.array(pose[0].flatten(), dtype=np.float32)).as_quat(False))
        print(file)
        print(pose[0])
        print(pose[1])
        poses.append(
            (file.name, pose_rot.flatten().tolist(), pose[1].flatten().tolist())
        )

    return poses


@eel.expose
def auto_detect_camera():
    global detector
    detector.auto_generate_camera()

    return (
        detector.camera.camera_matrix.flatten().tolist(),
        detector.camera.dist_coeff.flatten().tolist(),
        detector.camera.image_size,
    )


@eel.expose
def get_images_list():
    global detector
    return [f.name for f in detector.image_files]


@eel.expose
def reset_detector():
    global detector
    detector = det.Detector(configs.CONFIG_DIR / "charuco_board.json", verbose=True)
