import { execSync } from "child_process";
const packageInfo = require("../package.json");

interface NpmList {
  name: string;
  dependencies: object;
}

export const isPkgGloballyInstalled = () => {
  const npmList: NpmList = JSON.parse(
    execSync("npm ls -g --json=true", {
      encoding: "utf-8",
    })
  );

  const dependencies = Object.keys(npmList.dependencies);

  const isPkgGloballyInstalled = dependencies.find(
    (val) => val.toLocaleLowerCase() === packageInfo.name.toLocaleLowerCase()
  );

  return isPkgGloballyInstalled;
};
