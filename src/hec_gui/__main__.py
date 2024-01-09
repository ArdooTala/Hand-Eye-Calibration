import eel
from hec_gui import VUE_APP_DIR


def main():
    eel.init(str(VUE_APP_DIR / 'vueapp' / 'HandEyeCalibration' / 'dist'), allowed_extensions=['.js', '.html'])
    eel.start('index.html', size=(2160, 1280))


if __name__ == "__main__":
    main()
