import { existsSync, mkdirSync } from 'fs';
import { VS_CODE_FOLDER_NAME } from './constants';
import { log } from './utils/logger';

export const verifyVsCodeFolder = () => {
  try {
    log.info(`Starting ${VS_CODE_FOLDER_NAME} folder verification and creation`);

    const isVsCodeFolderExists = existsSync(VS_CODE_FOLDER_NAME);

    if (!isVsCodeFolderExists) {
      mkdirSync(VS_CODE_FOLDER_NAME);
    }
  } catch (error) {
    throw new Error(
      `Failed the ${VS_CODE_FOLDER_NAME} folder verification and creation due ${
        (error as Error).message
      }`,
    );
  }
};
