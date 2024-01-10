import re
from pathlib import Path
import yaml
import numpy as np
from scipy.spatial.transform import Rotation

from hand_eye_calibration import logger


def try_detect_robot_manufacturer(prg_lines):
    if not prg_lines:
        return False

    for conf in []:
        pass


class RobotModel:
    def __init__(self, manufacturer=None, specs_file=None):
        if not specs_file:
            if not manufacturer:
                raise ValueError("Robot model not defined, please provide the manufacturer or the specs file.")

            specs_file = Path(__file__).absolute().parent / "model_data" / f"{manufacturer}.yaml"

        with open(specs_file) as f:
            specs = yaml.safe_load(f)

        self._manufacturer = specs.get('manufacturer', 'Generic')
        self._rot_system = specs.get('rotation_system')
        self._cmd_template = specs.get('move_command_regex')
        self._dist_scale = 1.0 if specs.get('length_unit', 'METER') == 'METER' else 0.001
        self._robot_poses = []

    @property
    def poses_count(self):
        return len(self._robot_poses)

    @property
    def robot_poses(self):
        for pose in self._robot_poses:
            yield self._convert_pose(pose)

    def parse_robot_program(self, program_file):
        moves_j = re.compile(self._cmd_template)
        with open(program_file, 'r') as file:
            prog = file.read()
        file_poses = moves_j.findall(prog)
        self._robot_poses = [np.array(p, dtype=np.float32) for p in file_poses]
        logger.info(f"{len(self._robot_poses)} MoveJ lines found.")

    def _convert_pose(self, rob_pose):
        if len(rob_pose) == 7:
            logger.debug("Converting Quaternions to Rotation Matrix")
            rob_pose_rot = Rotation.from_quat(rob_pose[3:]).as_matrix()
        elif len(rob_pose) == 6:
            logger.debug("Converting Axis-Angle to Rotation Matrix")
            rob_pose_rot = Rotation.from_rotvec(rob_pose[3:]).as_matrix()
        else:
            logger.warning("Rotation format not recognized!")
            return None

        rob_pose_pos = rob_pose[:3] * self._dist_scale

        logger.debug(f"rob_pose [r, t]:\n{rob_pose_rot}\n{rob_pose_pos}")

        return rob_pose_rot, rob_pose_pos
