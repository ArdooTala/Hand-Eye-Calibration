import cv2
from pathlib import Path
import numpy as np
import numpy.linalg

from hand_eye_calibration.image_processing import charuco_detector
from hand_eye_calibration.robot_model import ur_robot
from hand_eye_calibration import hand_eye_calibrator
from hand_eye_calibration.transformations import transform_point, create_transform

# Detect CharucoBoards
det = charuco_detector.CharucoDetector("data/charuco_board.yaml", verbose=False)
det.load_images_from_files("data/images", extension="png")
# images = map(cv2.imread, Path("data/images").glob("*.png"))
# det.load_images(enumerate(images))
det.auto_detect_camera_parameters()
det.camera.write_camera_calibration()   # Write the Camera Calibration Result

# Extract Robot Poses
with open("data/CalibrationProgram.txt", 'r') as f:
    program = f.read()
    robot = ur_robot.URRobot.from_robot_program(program)

# Calculate the Hand-Eye Calibration
hecalib = hand_eye_calibrator.HandEyeCalibrator(det, robot)
cal1 = hecalib.calibrate_hand_eye()
hecalib.write_hand_eye_transform()      # Write the Hand-Eye Calibration Result

print(hecalib.get_hand_eye_coordinates())
r, t = hecalib.get_hand_eye_coordinates(as_matrix=True)

tcp = create_transform(r, t)
print(tcp)

board_poses = []
base = np.array([0, 0, 0]).reshape((3, 1))
for (_, cam_pose), rob_pose in zip(det.estimated_poses, robot):
    base2flange = create_transform(*rob_pose)
    base2cam = base2flange @ tcp
    c_r = cv2.Rodrigues(cam_pose[0])[0]
    cam2board = create_transform(c_r, cam_pose[1])
    base2board = base2cam @ cam2board
    board_poses.append([base2board[:3, 3]])
    # print("=" * 100)
    # print(flange)
    # print(cam)
    # print(cam2board)
    # print(board)
    # print(base2board[:3, 3])

avg = np.average(board_poses, axis=0)
std = np.std(board_poses, axis=0)
print(avg)
print(std)
