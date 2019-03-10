# 1.0.1 - 2019-03-10

### Adds

- Adds: `http-server` and initial `/docs` setup for adding the GitHub demo

### Fixes

- Fixes: issues where the Microsoft browsers were being labeled incorrectly [#4](https://github.com/Pageworks/fuel-device-manager/issues/4)

# 1.0.0 - 2019-03-06

### Fixes

- Fixes: static functions are called anonymously so they return the booleans value instead of the function itself

# 0.0.4 - 2019-03-05

### Fixes

- Fixes: adds public static `supportsTouch` function

# 0.0.3 - 2019-03-05

### Fixes

- Fixes: includes the static funcitons in the `global.d.ts` file

# 0.0.2 - 2019-03-05

### Fixes

- Fixes: includes the `global.d.ts` file in the npm package

# 0.0.1 - 2019-03-05

### Adds

- Adds: new `DeviceManager` class manages the browsers device status classes
- Adds: public static `isChrome` method for checking if the browser is Chrome
- Adds: public static `isIE` method for checking if the browser is Internet Explorer
- Adds: public static `isEdge` method for checking if the browser is Edge
- Adds: public static `isFirefox` method for checking if the browser is Firefox
- Adds: public static `isOpera` method for checking if the browser is Opera
- Adds: public static `isSafari` method for checking if the browser is Safari
- Adds: public static `isBlinkEngine` method for checking if the browser is using the Blink Engine