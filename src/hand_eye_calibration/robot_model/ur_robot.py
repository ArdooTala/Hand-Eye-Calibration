from hand_eye_calibration.robot_model import base_robot_model
from scipy.spatial.transform import Rotation

class URRobot(base_robot_model.RobotModel):
    def __init__(self, poses=None):
        super().__init__(poses)
        self._dist_scale = 1
        self._cmd_template = "movej\(p\[(-?\d*[.]?\d+), (-?\d*[.]?\d+), (-?\d*[.]?\d+), (-?\d*[.]?\d+), (-?\d*[.]?\d+), (-?\d*[.]?\d+)\], a=\d*[.]?\d+, v=\d*[.]?\d+, r=.+\)"

    def rotation_to_matrix(self, angles):
        angles = super().rotation_to_matrix(angles)
        assert len(angles) == 3
        return Rotation.from_rotvec(angles).as_matrix()

    def matrix_to_rotation(self, rot_matrix):
        rot_matrix = super().matrix_to_rotation(rot_matrix)
        return Rotation.from_matrix(rot_matrix).as_rotvec()
