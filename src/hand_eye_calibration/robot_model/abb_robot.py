from hand_eye_calibration.robot_model import base_robot_model
from scipy.spatial.transform import Rotation

class AbbRobot(base_robot_model.RobotModel):
    def __init__(self):
        super().__init__("ABB")
        self._dist_scale = 0.001
        self._cmd_template = "MoveJ \[\[(-?\d*[.]?\d+),(-?\d*[.]?\d*),(-?\d*[.]?\d*)\],\[(-?\d*[.]?\d*),(-?\d*[.]?\d*),(-?\d*[.]?\d*),(-?\d*[.]?\d*)\],.*?;"

    def rotation_to_matrix(self, angles):
        angles = super().rotation_to_matrix(angles)
        assert len(angles) == 4
        return Rotation.from_quat(angles).as_matrix()

    def matrix_to_rotation(self, rot_matrix):
        rot_matrix = super().matrix_to_rotation(rot_matrix)
        return Rotation.from_matrix(rot_matrix).as_quat()
