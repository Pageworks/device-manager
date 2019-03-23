# Device Manager
A TypeScript module for handling device detection and status classes.

## Installation
Add Device Manager to any project using the NPM package `npm i --save fuel-device-manager`. Then import the `DeviceManager` class into your main application file using `import DeviceManager from 'fuel-device-manager'`.

### Using Device Manager
Start by instantiating a new `DeviceManager` class with `new DeviceManager();`. The Device Manager class take two optional parameters. First is a `boolean` for enabling debug mode, by default this value is `false`. The second value is a `boolean` telling Device Manager if you want the status classes added to the `document`, the default value is `false`.

Device Manager offers several static functions that can be called to check the users' browser agent. To use these functions combine `DeviceManager` with one of the function names from the table below. (ex: `DeviceManager.isIE`).

| Function            | Return                  | Default        |
| ------------------- |:----------------------- |:-------------- |
| isChrome            | boolean                 | `false`        |
| isIE                | boolean                 | `false`        |
| isEdge              | boolean                 | `false`        |
| isSafari            | boolean                 | `false`        |
| isFirefox           | boolean                 | `false`        |
| isOpera             | boolean                 | `false`        |
| isBlinkEngine       | boolean                 | `false`        |
