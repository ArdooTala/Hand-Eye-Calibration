from hand_eye_calibration.image_processing import charucodetector
from hand_eye_calibration.robot_model import robot_model
from hand_eye_calibration.hand_eye_calibrator import HandEyeCalibrator


# Detect CharucoBoards
det = charucodetector.CharucoDetector("data/charuco_board.json", verbose=False)
det.load_images("data/images", extension="png")
det.auto_detect_camera_parameters()
det.camera.write_camera_calibration()   # Write the Camera Calibration Result

# Extract Robot Poses
robot = robot_model.RobotModel(manufacturer='UR')
robot.parse_robot_program("data/CalibrationProgram.txt")

# Calculate the Hand-Eye Calibration
hecalib = HandEyeCalibrator(det, robot)
hecalib.preprocess_data()
rvec, tvec = hecalib.calibrate_hand_eye()
hecalib.write_hand_eye_transform()      # Write the Hand-Eye Calibration Result
