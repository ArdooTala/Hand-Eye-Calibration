# import logging
# from pathlib import Path
#
#
# CONFIGS_PATH = Path(__file__).absolute().parent / "configs"
#
# logger = logging.getLogger(__name__)
# handler = logging.StreamHandler()
# logger.addHandler(handler)
# logger.setLevel('INFO')
import logging


logger = logging.getLogger(__name__)
ch = logging.StreamHandler()
formatter = logging.Formatter('{levelname:8s} [{name:60s}]::\t{message}', style='{')

logger.setLevel(logging.INFO)
ch.setFormatter(formatter)
logger.addHandler(ch)
