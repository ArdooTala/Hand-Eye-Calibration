from hand_eye_calibration.image_processing import charuco_detector
from hand_eye_calibration.robot_model import ur_robot
from hand_eye_calibration import hand_eye_calibrator


# Detect CharucoBoards
det = charuco_detector.CharucoDetector("data/charuco_board.yaml", verbose=False)
det.load_images_from_files("data/images", extension="png")

# images = map(cv2.imread, Path("data/images").glob("*.png"))
# det.load_images(enumerate(images))

# det.camera_model.write_camera_calibration()   # Write the Camera Calibration Result

# Extract Robot Poses
with open("data/CalibrationProgram.txt", 'r') as f:
    program = f.read()

robot = ur_robot.URRobot.from_robot_program(program)

# Calculate the Hand-Eye Calibration
hecalib = hand_eye_calibrator.HandEyeCalibrator(det, robot)
cal1 = hecalib.calibrate_hand_eye()
print(cal1)
hecalib.write_hand_eye_transform()      # Write the Hand-Eye Calibration Result

print(hecalib.get_hand_eye_coordinates())
r, t = hecalib.get_hand_eye_coordinates(as_matrix=True)

avg, std = hecalib.calculate_calibration_error()
print(avg, std)
