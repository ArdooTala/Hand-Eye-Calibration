# Hand-Eye Calibration
A simple GUI for easy Hand-Eye Calibration using OpenCV. Currently supports UR and ABB robots.

## Installation
```sh
git clone https://github.com/ArdooTala/Hand-Eye-Calibration.git
cd Hand-Eye-Calibration

python -m venv venv # Optional
pip install ./
```

## Running with GUI
```sh
python -m ui
```

## Running with CLI
```sh
python -m eye_in_hand ./images RobotProgram.txt --rob=UR
```

## Importing the Library

