export const getVscodeGlobalExtensionsFilePath = (platform: NodeJS.Platform, homedir: string) => {
  switch (platform) {
    case 'darwin':
      return `${homedir}/Library/Application Support/Code/User/extensions.json`;
    case 'linux':
      return `${homedir}/.config/Code/User/extensions.json`;
    default:
      return `${homedir}/AppData\\Code\\User\\extensions.json`;
  }
};
