import cv2
from pathlib import Path

from hand_eye_calibration.image_processing import charuco_detector
from hand_eye_calibration.robot_model import base_robot_model, kuka_robot
from hand_eye_calibration.hand_eye_calibrator import HandEyeCalibrator


# Detect CharucoBoards
det = charuco_detector.CharucoDetector("data/charuco_board.yaml", verbose=False)

# Alt 1
# det.load_images_from_files("data/images", extension="png")
# Alt 2
images = map(cv2.imread, Path("data/images").glob("*.png"))
det.load_images(enumerate(images))

det.auto_detect_camera_parameters()
det.camera.write_camera_calibration()   # Write the Camera Calibration Result

# Extract Robot Poses
# robot = kuka_robot.KukaRobot()
robot = base_robot_model.RobotModel(manufacturer='UR')
robot.parse_robot_program("data/CalibrationProgram.txt")

# Calculate the Hand-Eye Calibration
hecalib = HandEyeCalibrator(det, robot)
hecalib.preprocess_data()
rvec, tvec = hecalib.calibrate_hand_eye()
hecalib.write_hand_eye_transform()      # Write the Hand-Eye Calibration Result

print(hecalib.get_hand_eye_coordinates(rot_format="TAIT–BRYAN ANGLES"))
