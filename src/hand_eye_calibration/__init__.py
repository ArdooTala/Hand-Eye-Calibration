import logging
from pathlib import Path


CONFIGS_PATH = Path(__file__).absolute().parent / "configs"

logger = logging.getLogger(__name__)
handler = logging.StreamHandler()
logger.addHandler(handler)
logger.setLevel('DEBUG')
