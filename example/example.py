from eye_in_hand.configs import CONFIG_DIR
from eye_in_hand.image_processing import detector
from eye_in_hand.robot_model import robot_model
from eye_in_hand import hand_eye_calibrator

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
