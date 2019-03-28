# Device Manager
A TypeScript module for handling device detection and status classes.

## Installation
Add Device Manager to any project using the NPM package `npm i --save fuel-device-manager`. Then import the `DeviceManager` class into your main application file using `import DeviceManager from 'fuel-device-manager'`.

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
Any element with `js-touch` will recieve a `data-touching` attribute. When the element is being touched by the user the attribute will be `true`, after the first initial touch the attribute will be `false`. You could style elements yourself using the example below.
```
div{
    border: 2px solid red;
}

div[data-touching="true"]{
    border-color: blue;
}
```

#### SASS Mixin
The mixin below allows you to easily manage the style of elements only when they're being touched.
```
@mixin touch{
    &[data-touching="true"]{
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
