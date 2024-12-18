import re
import numpy as np

from hand_eye_calibration import logger


class RobotModel:
    def __init__(self, poses=None):
        self._cmd_template = ""
        self._dist_scale = 1
        if poses:
            self._robot_poses = list(poses)

    def __len__(self):
        return len(self._robot_poses)

    def __getitem__(self, item):
        return self._convert_pose(self._robot_poses[item])

    @property
    def robot_poses(self):
        return self._robot_poses

    @robot_poses.setter
    def robot_poses(self, poses):
        self._robot_poses = poses

    def rotation_to_matrix(self, angles):
        angles = np.asarray(angles)
        if angles is None:
            raise ValueError
        return angles

    def matrix_to_rotation(self, rot_matrix):
        rot_matrix = np.asarray(rot_matrix)
        if rot_matrix is None:
            raise ValueError
        assert rot_matrix.shape == (3, 3)
        return rot_matrix

    def parse_robot_program(self, prog):
        moves_j = re.compile(self._cmd_template)
        file_poses = moves_j.findall(prog)
        self.robot_poses = [np.array(p, dtype=np.float32) for p in file_poses]
        logger.info(f"{len(self._robot_poses)} MoveJ lines found.")

    @classmethod
    def from_robot_program(cls, prog):
        inst = cls()
        inst.parse_robot_program(prog)
        return inst

    def _convert_pose(self, rob_pose):
        if not self.rotation_to_matrix:
            raise ValueError("rotation_to_matrix not defined")
        rob_pose_rot = self.rotation_to_matrix(rob_pose[3:])
        rob_pose_pos = rob_pose[:3] * self._dist_scale
        logger.debug(f"rob_pose [r, t]:\n{rob_pose_rot}\n{rob_pose_pos}")
        return rob_pose_rot, rob_pose_pos
