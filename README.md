# Device Manager
A TypeScript module for handling device detection and status classes.

## Installation
Add Device Manager to any project using the NPM package `npm i --save @codewithkyle/device-manager`. Then import the `DeviceManager` class into your main application file using `import DeviceManager from '@codewithkyle/device-manager'`.

## Using Device Manager
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
| connection          | NetworkInformation      | `undefined`    |

### Using The Custom Touch Class
In order to fix the annoying sticky `:hover` status on mobile/touch devices Device Manager offers a simple way to track touch classes. To see the custom touch classes in action view the [demo](https://codewithkyle.github.io/device-manager/touch-test.html) on a device that supports touch input.

#### Working With Custom Touch
To add the custom touch status tracking to any element just add the `js-touch` class.
```
<div class="js-touch">
    <span>Touch Me!</span>
</div>
```

#### Styling Raw Touch
Any element with `js-touch` will toggle the `is-touching` status class when the element is being touched by the user. You could style elements yourself using the example below.
```
div{
    border: 2px solid red;
}

div.is-touching{
    border-color: blue;
}
```

#### SASS Mixin
The mixin below allows you to easily manage the style of elements only when they're being touched.
```
@mixin touch{
    &.is-touching{
        @content;
    }
}
```

In order to prevent the sticky status you could also use two other mixins for only applying `:hover` CSS when the user is not using a touch device or if the device supports touch but the user isn't using touch.
```
@mixin hover{
    &:hover{
        html.is-not-touch-device & {
            @content;
        }

        html.is-touch-device:not(.has-touched) & {
            @content
        }
    }
}

@mixin active{
    &:active{
        html.is-not-touch-device & {
            @content;
        }
    }
}
```

## Experimental NetworkInformation API
**PLEASE NOTE:** The [NetworkInformation API](https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation) is still in the initial draft stage but is supported on the majority of mobile browsers. Use on production at your own risk.

The safest way to work the NetworkInformation API in it's current (draft) stage is to use it to restrict features when needed. You should **always** assume that the `NetworkInformation` will be `undefined`.  As an example let's say you have an auto-playing background video on the page. The videos `load()` method should fire if the `NetworkInformation` is `undefined` or if the `effectiveType` is `4g`.  If the type is `3g`, `2g`, or `slow-2g` you could use a background image instead. This won't prevent you from wasting mobile users date since LTE connections are `4g` and any device connected via WIFI are also `4g` you'll need to assume someone on `4g` is connected via WIFI and data isn't that big of an issue.

**Suggested Uses:**
- Always assume `NetworkInformation` will return `undefined`
- Only use `NetworkInformation` to optimize the loading speed of your website/application
- Assume any device on a `4g` connection is using WIFI
