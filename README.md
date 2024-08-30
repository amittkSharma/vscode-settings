# vscode-settings

Package contains recommended vs-code editor settings and recommended extensions, for enhancing developer productivity & better developer experience

## Features

- vscode-settings can be installed both as local or global package
- flexibility to use single source of settings and extensions across all their VS Code instances & projects
- provides vscode settings for better developer experience
- recommends community suggested extensions
- automatically detects the installation path

## Installation

```Globally
npm install -g @amittksharma/vscode-settings
```

It is advisable to use install this packages dev-dependency to any other project

```Locally
npm install @amittksharma/vscode-settings
```

### Usage

- Install the package either globally or locally using the above commands
- Package will automatically detects the installation path
- There are two options to consume this packages
  - Globally installed package will update user settings
    - Extends the VS Code user settings with the settings from the packages
  - Locally installed package will update workspace settings
    - Create a .vscode folder in project root folder
    - Create a settings.json file
    - Create a extensions.json file
- It is important to note that when the package is installed globally, the package works with the assumption that vscode is installed at the following locations for specific underlying operating systems:

| S.No | Operating system | Location                                                       |
| ---- | ---------------- | -------------------------------------------------------------- |
| 1.   | darwin (Mac)     | ${homedir}/Library/Application Support/Code/User/settings.json |
| 2.   | linux            | ${homedir}/.config/Code/User/settings.json                     |
| 3.   | windows          | ${homedir}/AppData\\Code\\User\\settings.json                  |

- The package will override the existing settings or extension files

## Supported Extensions

| S.No | Extension                                                                                                       | IsDefault |
| ---- | --------------------------------------------------------------------------------------------------------------- | --------- |
| 1.   | [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)               | Yes       |
| 2.   | [Bookmarks](https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks)                          | Yes       |
| 3.   | [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) | Yes       |
| 4.   | [Code Snap](https://marketplace.visualstudio.com/items?itemName=adpyke.codesnap)                                | Yes       |
| 5.   | [CodeMetrics](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-codemetrics)             | No        |
| 6.   | [DotEnv](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)                                  | Yes       |
| 7.   | [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)                            | Yes       |
| 8.   | [Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory)                      | Yes       |
| 9.   | [Git Lens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)                                 | Yes       |
| 10.  | [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)     | Yes       |
| 11.  | [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)         | Yes       |
| 12.  | [Rest Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)                            | Yes       |
| 13.  | [Todo Highlight](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight)               | Yes       |
| 14.  | [Task Explorer](https://marketplace.visualstudio.com/items?itemName=spmeesseman.vscode-taskexplorer)            | Yes       |

## License

- MIT
