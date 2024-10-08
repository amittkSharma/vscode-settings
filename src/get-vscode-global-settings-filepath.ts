export const getVscodeGlobalSettingsFilePath = (platform: NodeJS.Platform, homedir: string) => {
  switch (platform) {
    case 'darwin':
      return `${homedir}/Library/Application Support/Code/User/settings.json`;
    case 'linux':
      return `${homedir}/.config/Code/User/settings.json`;
    default:
      return `${homedir}/AppData\\Code\\User\\settings.json`;
  }
};
