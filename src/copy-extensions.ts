import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { DEFAULT_SETTINGS_EXTENSIONS_PATH, VS_CODE_EXTENSION_FILE } from './constants';
import { log } from './utils/logger';

export const copyExtensions = (extensionsFilePath: string) => {
  try {
    log.info(`Starting the process of copying vscode extensions`);

    const rawData = readFileSync(
      join(DEFAULT_SETTINGS_EXTENSIONS_PATH, VS_CODE_EXTENSION_FILE),
      'utf8',
    );
    const readable = JSON.parse(rawData);

    if (readable) {
      writeFileSync(extensionsFilePath, JSON.stringify(readable, null, 2));
    }
  } catch (error) {
    throw new Error(`Failed to copy the vscode extensions due ${(error as Error).message}`);
  }
};
