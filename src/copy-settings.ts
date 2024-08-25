import * as fs from "fs";
import { join } from "path";
import {
  DEFAULT_SETTINGS_EXTENSIONS_PATH,
  VS_CODE_FOLDER_NAME,
  VS_CODE_SETTINGS_FILE_NAME,
  VS_CODE_SETTINGS_FILES,
} from "./constants";

export const copySettings = () => {
  try {
    console.log(`Starting the process of copying vscode settings`);

    let completeSettings: object | undefined = undefined;

    VS_CODE_SETTINGS_FILES.forEach((fileName) => {
      let rawData = fs.readFileSync(
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
      fs.writeFileSync(
        join(VS_CODE_FOLDER_NAME, VS_CODE_SETTINGS_FILE_NAME),
        JSON.stringify(completeSettings, null, 2)
      );
    }
  } catch (error) {
    throw new Error(
      `Failed to copy the vscode settings due ${(error as Error).message}`
    );
  }
};
