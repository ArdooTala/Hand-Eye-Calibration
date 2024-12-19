import logging
import cv2
import numpy as np
from pathlib import Path
# from hand_eye_calibration import logger


logger = logging.getLogger(__name__)

class ImageLoader:
    def __init__(self, verbose):
        self.verbose = verbose
        self._image_files = None
        self._images_dir = None
        self._make_image_generator = None
        self._get_image = None

    @property
    def image_files(self):
        return self._image_files

    @property
    def images(self):
        if not self._make_image_generator:
            raise ValueError("No images are loaded")
        return self._make_image_generator()

    def load_images_from_files(self, images_dir, extension='jpg'):
        self._images_dir = Path(images_dir)
        self._image_files = sorted(self._images_dir.glob(f"*.{extension}"))

        def _read_images_from_files():
            for img_file in self._image_files:
                logger.info(f"Reading Image from file > {img_file}")
                try:
                    img = cv2.imread(str(img_file))
                except Exception as e:
                    img = None
                    logger.warning(f"Could not read the image: {img_file}")
                    logger.error(e)
                yield img_file, img

        self._make_image_generator = _read_images_from_files

        def get_image(i):
            return self._image_files[i], cv2.imread(str(self._image_files[i]))

        self._get_image = get_image

    def load_images(self, images):
        images = list(sorted(images, key=lambda x: x[0]))
        self._make_image_generator = lambda: images

    def __len__(self):
        return len(self._image_files)

    def __getitem__(self, item):
        return self._get_image(item)
