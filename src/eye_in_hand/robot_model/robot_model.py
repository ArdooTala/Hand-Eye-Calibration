import re
import yaml
import numpy as np
from eye_in_hand.configs import CONFIG_DIR


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

            specs_file = CONFIG_DIR / f"{manufacturer}.yaml"

        with open(specs_file) as f:
            specs = yaml.safe_load(f)

        self._manufacturer = specs.get('manufacturer', 'Generic')
        self._dis_unit = specs.get('length_unit', 'mm')
        self._rot_system = specs.get('rotation_system')
        self._cmd_template = specs.get('move_command_regex')
        self._robot_poses = []

    @property
    def poses_count(self):
        return len(self._robot_poses)

    @property
    def robot_poses(self):
        for pose in self._robot_poses:
            yield np.array(pose, dtype=np.float32)

    def parse_robot_program(self, program_file):
        print("=" * 150)
        moves_j = re.compile(self._cmd_template)
        with open(program_file, 'r') as file:
            prog = file.read()
            self._robot_poses = moves_j.findall(prog)
        print(f"{len(self._robot_poses)} MoveJ lines found.")

    def _convert_to_meters(self, pt):
        scale = 1 if self._dis_unit == 'mm' else 0.001
        return np.array(pt) * scale
