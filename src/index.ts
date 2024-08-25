import { copyExtensions } from "./copy-extensions";
import { copySettings } from "./copy-settings";
import { verifyVsCodeFolder } from "./vscode-existence-creation";

const runApp = () => {
  try {
    verifyVsCodeFolder();
    copySettings();
    copyExtensions();
  } catch (error) {
    console.error(`!!! Process Failed !!!: ${(error as Error).message}`);
  }
};

runApp();
