import argparse
from pathlib import Path

from hand_eye_calibration import CONFIGS_PATH
from hand_eye_calibration.image_processing import charuco_detector
from hand_eye_calibration.robot_model import robot_model
from hand_eye_calibration.hand_eye_calibrator import HandEyeCalibrator

parser = argparse.ArgumentParser()
parser.add_argument("images",
                    help="Path to images folder")
parser.add_argument("program",
                    help="Path to the Robot Program")
parser.add_argument("-o", "--output",
                    help="Path to write the calibration result")
parser.add_argument("-b", "--board",
                    help="Path to charucoboard yaml file")
parser.add_argument("-f", "--extension",
                    help="images format",
                    default="png")
parser.add_argument("-r", "--robot",
                    help="Robot manufacturer",
                    choices=["UR", "ABB", "KUKA"],
                    default="UR")
parser.add_argument("-v", "--verbose",
                    help="increase output verbosity",
                    action="store_true")

args = parser.parse_args()

print(args)
img = Path(args.images)
prg = Path(args.program)
if args.output:
    out = Path(args.output)
else:
    out = Path.cwd()

if args.board:
    brd = Path(args.board)
else:
    brd = CONFIGS_PATH / "charuco_board.yaml"

# Detect CharucoBoards
det = charuco_detector.CharucoDetector(brd, verbose=args.verbose)
det.load_images(img, extension=args.extension)
det.auto_detect_camera_parameters()
det.camera.write_camera_calibration(out)  # Write the Camera Calibration Result

# Extract Robot Poses
robot = robot_model.RobotModel(manufacturer=args.robot)
robot.parse_robot_program(prg)

# Calculate the Hand-Eye Calibration
hecalib = HandEyeCalibrator(det, robot)
hecalib.preprocess_data()
rvec, tvec = hecalib.calibrate_hand_eye()
hecalib.write_hand_eye_transform(out)  # Write the Hand-Eye Calibration Result
