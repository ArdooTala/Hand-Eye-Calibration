from hand_eye_calibration.configs import CONFIG_DIR
from hand_eye_calibration.image_processing import detector
from hand_eye_calibration.robot_model import robot_model
from hand_eye_calibration import hand_eye_calibrator

det = detector.Detector(CONFIG_DIR / "charuco_board.json", verbose=False)
det.load_images("data/images", extension="png")
det.auto_generate_camera()

robot = robot_model.RobotModel(manufacturer='UR')
robot.parse_robot_program("data/CalibrationProgram.txt")

hecalib = hand_eye_calibrator.HandEyeCalibrator(det, robot)
hecalib.preprocess_data()
rvec, tvec = hecalib.calibrate_hand_eye()

det.camera.write_camera_calibration()
hecalib.write_hand_eye_transform()
