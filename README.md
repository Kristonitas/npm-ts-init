Suggested `.vscode/settings.json` to auto format on save:
```json
{
  "[javascript]": {
    "editor.formatOnSave": true
  },
  "[typescript]": {
    "editor.formatOnSave": true
  },
  "[json]": {
    "editor.formatOnSave": true
  }
}
```

Suggested `./vscode/launch.json` to debug:
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "build and run",
      "preLaunchTask": "npm: build:dev",
      "program": "${workspaceFolder}/dist/npm-ts-init.js",
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen"
    },
    {
      "type": "node",
      "request": "launch",
      "name": "run",
      "program": "${workspaceFolder}/dist/npm-ts-init.js",
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen"
    },
    {
      "type": "node",
      "request": "launch",
      "name": "vscode-jest-tests",
      "args": ["--runInBand"],
      "cwd": "${workspaceFolder}",
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen",
      "program": "${workspaceFolder}/node_modules/jest/bin/jest"
    }
  ]
}
```
