# Hand-Eye Calibration

A simple package for easy Hand-Eye Calibration using OpenCV. Currently, supports UR and ABB robots.

---

## Installation

### Windows

```powershell
# Clone from GitHub:
git clone https://github.com/ArdooTala/Hand-Eye-Calibration.git
cd .\Hand-Eye-Calibration\

# Recommended: make and activate a virtual env
py -m venv .venv
.\venv\Scripts\activate

# Install the Library and the dependencies
py -m pip install .
```

Optionally, to install the GUI:

```powershell
cd .\src\gui\
py -m pip install .
```

### Unix

```shell
# Clone from GitHub:
git clone https://github.com/ArdooTala/Hand-Eye-Calibration.git
cd Hand-Eye-Calibration

# Recommended: make and activate a virtual env:
python -m venv .venv
./venv/Scripts/activate.bash

# Install the Library and the dependencies
pip install .
```

Optionally, to install the GUI:

```shell
cd src/gui/
pip install .
```

---

## Quick Start Guide

### GUI

Execute the following command from commandline (with the virtual env activated, if it applies):

```shell
HECal
```

Or alternatively, directly execute the `hec_gui` package to run the GUI app.

```shell
python -m hec_gui
```

### CLI

```sh
python -m hand_eye_calibration PATH/TO/IMAGES/DIR PATH/TO/ROBOT/PROGRAM
```

```shell
$ python -m hand_eye_calibration -h                                                                 
usage: __main__.py [-h] [-o OUTPUT] [-f EXTENSION] [-r {UR,ABB,KUKA}] [-v] images program

positional arguments:
  images                Path to images folder
  program               Path to the Robot Program

options:
  -h, --help            show this help message and exit
  -o OUTPUT, --output OUTPUT
                        Path to write the calibration result
  -b BOARD, --board BOARD
                        Path to charucoboard yaml file
  -f EXTENSION, --extension EXTENSION
                        images format
  -r {UR,ABB,KUKA}, --robot {UR,ABB,KUKA}
                        Robot manufacturer
  -v, --verbose         increase output verbosity
```

### Config Files

#### Robot Models (YAML)

```yaml
manufacturer: ABB
length_unit: MILLIMETER
rotation_system: QUATERNION
move_command_regex: MoveJ \[\[(-?\d*[.]?\d+),(-?\d*[.]?\d*),(-?\d*[.]?\d*)\],\[(-?\d*[.]?\d*),(-?\d*[.]?\d*),(-?\d*[.]?\d*),(-?\d*[.]?\d*)\],.*?;
```

#### Charuco Board (YAML)

```yaml
num_X: 9
num_Y: 6
len_squares: 0.04
len_markers: 0.035
markers_dictionary: 2
```

---
