import { join } from 'path';
import { copyExtensions } from './copy-extensions';
import { copySettings } from './copy-settings';
import { getVscodeGlobalExtensionsFilePath } from './get-vscode-global-extension-filepath';
import { getVscodeGlobalSettingsFilePath } from './get-vscode-global-settings-filepath';
import { isPkgGloballyInstalled } from './verify-pkg-global-installation';
import { verifyVsCodeFolder } from './vscode-existence-creation';

import os from 'node:os';
import {
  VS_CODE_EXTENSION_FILE,
  VS_CODE_FOLDER_NAME,
  VS_CODE_SETTINGS_FILE_NAME,
} from './constants';
import { log } from './utils/logger';

const launchProcess = () => {
  try {
    let settingsFilePath = join(VS_CODE_FOLDER_NAME, VS_CODE_SETTINGS_FILE_NAME);

    let extensionsFilePath = join(VS_CODE_FOLDER_NAME, VS_CODE_EXTENSION_FILE);
    const isPkgInstalledGlobally = isPkgGloballyInstalled();

    log.info(`package is installed globally: ${isPkgInstalledGlobally}`);

    if (isPkgInstalledGlobally) {
      const userInfo = os.userInfo();
      const platform = os.platform();

      settingsFilePath = getVscodeGlobalSettingsFilePath(platform, userInfo.homedir);
      extensionsFilePath = getVscodeGlobalExtensionsFilePath(platform, userInfo.homedir);
    } else {
      verifyVsCodeFolder();
      copyExtensions(extensionsFilePath);
    }

    copySettings(settingsFilePath);
  } catch (error) {
    log.error(`!!! Process Failed !!!: ${(error as Error).message}`);
  }
};

launchProcess();
