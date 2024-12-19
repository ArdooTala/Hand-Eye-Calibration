import numpy as np


def create_transform(r: np.ndarray, t: np.ndarray):
    t = t.reshape((3, 1))
    r = r.reshape((3, 3))

    mat = np.eye(4)
    mat[:3,:3] = r
    mat[:3,3:] = t

    return mat

def transform_point(p: np.ndarray, x: np.ndarray):
    p = np.append(p, [[1]], axis=0)
    print(p)
    pp = np.matmul(x, p)
    print(pp)
    return pp


if __name__ == "__main__":
    t = np.array([0, 0, 0])
    r = np.array(
        [[np.cos(np.pi/2), -np.sin(np.pi/2), 0],
         [np.sin(np.pi/2),  np.cos(np.pi/2), 0],
         [0, 0, 1]]
    )
    print(t)
    print(r)
    x = create_transform(r, t)
    print(x)

    p = np.array([1, 0, 0]).reshape((3, 1))
    transform_point(p, x)