import * as fs from "fs";
import { join } from "path";
import {
  DEFAULT_SETTINGS_EXTENSIONS_PATH,
  VS_CODE_EXTENSION_FILE,
  VS_CODE_FOLDER_NAME,
} from "./constants";

export const copyExtensions = () => {
  try {
    console.log(`Starting the process of copying vscode extensions`);

    let rawData = fs.readFileSync(
      join(DEFAULT_SETTINGS_EXTENSIONS_PATH, VS_CODE_EXTENSION_FILE),
      "utf8"
    );
    let readable = JSON.parse(rawData);

    if (readable) {
      fs.writeFileSync(
        join(VS_CODE_FOLDER_NAME, VS_CODE_EXTENSION_FILE),
        JSON.stringify(readable, null, 2)
      );
    }
  } catch (error) {
    throw new Error(
      `Failed to copy the vscode extensions due ${(error as Error).message}`
    );
  }
};
