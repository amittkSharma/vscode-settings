import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import {
  DEFAULT_SETTINGS_EXTENSIONS_PATH,
  VS_CODE_SETTINGS_FILES,
} from "./constants";
("fs");

export const copySettings = (settingsFilePath: string) => {
  try {
    console.log(`Starting the process of copying vscode settings`);

    let completeSettings: object | undefined = undefined;

    VS_CODE_SETTINGS_FILES.forEach((fileName) => {
      let rawData = readFileSync(
        join(DEFAULT_SETTINGS_EXTENSIONS_PATH, fileName),
        "utf8"
      );
      let readable = JSON.parse(rawData);

      completeSettings = {
        ...completeSettings,
        ...readable,
      };
    });

    if (completeSettings) {
      writeFileSync(
        settingsFilePath,
        JSON.stringify(completeSettings, null, 2)
      );
    }
  } catch (error) {
    throw new Error(
      `Failed to copy the vscode settings due ${(error as Error).message}`
    );
  }
};
