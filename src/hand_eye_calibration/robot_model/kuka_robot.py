from hand_eye_calibration.robot_model import base_robot_model
from scipy.spatial.transform import Rotation

class KukaRobot(base_robot_model.RobotModel):
    def __init__(self):
        super().__init__("KUKA")
        self._dist_scale = 0.001
        self._cmd_template = "S?(?:PTP|LIN|SPL)\w+\{X (-?\d*[.]?\d+),\w+Y (-?\d*[.]?\d+),\w+Z (-?\d*[.]?\d+),\w+A (-?\d*[.]?\d+),\w+B (-?\d*[.]?\d+),\w+C (-?\d*[.]?\d+).*\}.*"

    def rotation_to_matrix(self, angles):
        angles = super().rotation_to_matrix(angles)
        assert len(angles) == 3
        return Rotation.from_euler('ZYX', angles, degrees=True).as_matrix()

    def matrix_to_rotation(self, rot_matrix):
        rot_matrix = super().matrix_to_rotation(rot_matrix)
        return Rotation.from_matrix(rot_matrix).as_euler('ZYX', degrees=True)
