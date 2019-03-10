/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DeviceManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _DeviceManager__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_DeviceManager__WEBPACK_IMPORTED_MODULE_0__);


(function(){
    new _DeviceManager__WEBPACK_IMPORTED_MODULE_0___default.a(true, true);

    if(_DeviceManager__WEBPACK_IMPORTED_MODULE_0___default.a.isChrome){
        var input = document.body.querySelector('.js-chrome .js-status');
        input.classList.add('is-true');
        input.innerHTML = 'true';
    }

    if(_DeviceManager__WEBPACK_IMPORTED_MODULE_0___default.a.isEdge){
        var input = document.body.querySelector('.js-edge .js-status');
        input.classList.add('is-true');
        input.innerHTML = 'true';
    }

    if(_DeviceManager__WEBPACK_IMPORTED_MODULE_0___default.a.isIE){
        var input = document.body.querySelector('.js-ie .js-status');
        input.classList.add('is-true');
        input.innerHTML = 'true';
    }

    if(_DeviceManager__WEBPACK_IMPORTED_MODULE_0___default.a.isFirefox){
        var input = document.body.querySelector('.js-firefox .js-status');
        input.classList.add('is-true');
        input.innerHTML = 'true';
    }

    if(_DeviceManager__WEBPACK_IMPORTED_MODULE_0___default.a.isSafari){
        var input = document.body.querySelector('.js-safari .js-status');
        input.classList.add('is-true');
        input.innerHTML = 'true';
    }

    if(_DeviceManager__WEBPACK_IMPORTED_MODULE_0___default.a.isOpera){
        var input = document.body.querySelector('.js-opera .js-status');
        input.classList.add('is-true');
        input.innerHTML = 'true';
    }
})();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DeviceManager = /** @class */ (function () {
    function DeviceManager(debug, setStatusClasses) {
        var _this = this;
        this.handleMouseEvent = function (e) {
            _this._body.removeEventListener('mouseover', _this.handleMouseEvent);
            _this._html.classList.add('is-pointer-device');
            _this._html.classList.remove('is-not-pointer-device');
            if (_this._isDebug) {
                console.log('%c[Device Manager] ' + "%cUser is using a pointer device", 'color:#35ffb8', 'color:#eee');
            }
        };
        this.handleTouchEvent = function (e) {
            _this._body.removeEventListener('touchstart', _this.handleTouchEvent);
            _this._html.classList.add('has-touched');
            if (_this._isDebug) {
                console.log('%c[Device Manager] ' + "%cUser has touched their device", 'color:#35ffb8', 'color:#eee');
            }
        };
        this._isDebug = (debug) ? debug : false;
        this._html = document.documentElement;
        this._body = document.body;
        if (setStatusClasses) {
            this.setStatusClasses();
        }
    }
    /**
     * Sets custom status classes on the HTML Document.
     */
    DeviceManager.prototype.setStatusClasses = function () {
        this._html.classList.add('has-js');
        this._html.classList.remove('has-no-js');
        if (this._isDebug) {
            console.log('%c[Device Manager] ' + "%cSetting status classes", 'color:#35ffb8', 'color:#eee');
        }
        this._body.addEventListener('mouseover', this.handleMouseEvent);
        this._body.addEventListener('touchstart', this.handleTouchEvent);
        if (DeviceManager.supportsTouch) {
            this._html.classList.add('is-touch-device');
            this._html.classList.remove('is-not-touch-device');
            if (this._isDebug) {
                console.log('%c[Device Manager] ' + ("%cSupports Touch: %c" + DeviceManager.supportsTouch), 'color:#35ffb8', 'color:#eee', 'color:#68e5ff');
            }
        }
        if (DeviceManager.isBlinkEngine) {
            this._html.classList.add('is-blink');
            if (this._isDebug) {
                console.log('%c[Device Manager] ' + ("%cUsing Blink Engine: %c" + DeviceManager.isBlinkEngine), 'color:#35ffb8', 'color:#eee', 'color:#68e5ff');
            }
        }
        if (DeviceManager.isChrome) {
            this._html.classList.add('is-chrome');
            if (this._isDebug) {
                console.log('%c[Device Manager] ' + ("%cChrome: %c" + DeviceManager.isChrome), 'color:#35ffb8', 'color:#eee', 'color:#68e5ff');
            }
        }
        if (DeviceManager.isIE) {
            this._html.classList.add('is-ie');
            if (this._isDebug) {
                console.log('%c[Device Manager] ' + ("%cInternet Explorer: %c" + DeviceManager.isIE), 'color:#35ffb8', 'color:#eee', 'color:#68e5ff');
            }
        }
        if (DeviceManager.isEdge) {
            this._html.classList.add('is-edge');
            if (this._isDebug) {
                console.log('%c[Device Manager] ' + ("%cEdge: %c" + DeviceManager.isEdge), 'color:#35ffb8', 'color:#eee', 'color:#68e5ff');
            }
        }
        if (DeviceManager.isFirefox) {
            this._html.classList.add('is-firefox');
            if (this._isDebug) {
                console.log('%c[Device Manager] ' + ("%cFirefox: %c" + DeviceManager.isFirefox), 'color:#35ffb8', 'color:#eee', 'color:#68e5ff');
            }
        }
        if (DeviceManager.isSafari) {
            this._html.classList.add('is-safari');
            if (this._isDebug) {
                console.log('%c[Device Manager] ' + ("%cSafari: %c" + DeviceManager.isSafari), 'color:#35ffb8', 'color:#eee', 'color:#68e5ff');
            }
        }
        if (DeviceManager.isOpera) {
            this._html.classList.add('is-opera');
            if (this._isDebug) {
                console.log('%c[Device Manager] ' + ("%cOpera: %c" + DeviceManager.isOpera), 'color:#35ffb8', 'color:#eee', 'color:#68e5ff');
            }
        }
    };
    /**
     * Checks if the browser is Chrome 1 - 71.
     * @returns `boolean`
     */
    DeviceManager.isChrome = (function () {
        var isChrome = false;
        // @ts-ignore
        if (!!window.chrome && (window.StyleMedia === undefined)) {
            isChrome = true;
        }
        return isChrome;
    })();
    /**
     * Checks if the browser is Edge 20+.
     * @returns `boolean`
     */
    DeviceManager.isEdge = (function () {
        var isEdge = false;
        // @ts-ignore
        if (!!window.StyleMedia && !!window.chrome) {
            isEdge = true;
        }
        return isEdge;
    })();
    /**
     * Checks if the browser is Internet Explorer 6 - 11.
     * @returns `boolean`
     */
    DeviceManager.isIE = (function () {
        var isIE = false;
        //@ts-ignore
        console.log(window.chrome);
        // @ts-ignore
        if (!!window.MSInputMethodContext && !!document.documentMode && (window.chrome === undefined)) {
            isIE = true;
        }
        return isIE;
    })();
    /**
     * Checks if the browser is Firefox 1+.
     * @returns `boolean`
     */
    DeviceManager.isFirefox = (function () {
        var isFirefox = false;
        // @ts-ignore
        if (typeof InstallTrigger !== 'undefined') {
            isFirefox = true;
        }
        return isFirefox;
    })();
    /**
     * Checks if the browser is Safari 3+.
     * @returns `boolean`
     */
    DeviceManager.isSafari = (function () {
        var isSafari = false;
        // @ts-ignore
        if (/constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification))) {
            isSafari = true;
        }
        return isSafari;
    })();
    /**
     * Checks if the browser is Opera 8+.
     * @returns `boolean`
     */
    DeviceManager.isOpera = (function () {
        var isOpera = false;
        // @ts-ignore
        if ((!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0) {
            isOpera = true;
        }
        return isOpera;
    })();
    /**
     * Checks if the browser is using the Blink Engine.
     * @see https://en.wikipedia.org/wiki/Blink_(browser_engine)
     * @returns `boolean`
     */
    DeviceManager.isBlinkEngine = (function () {
        var isBlink = false;
        // @ts-ignore
        if ((DeviceManager.isChrome || DeviceManager.isOpera) && !!window.CSS) {
            isBlink = true;
        }
        return isBlink;
    })();
    /**
     * Checks if the browser supports touch input.
     * @returns `boolean`
     */
    DeviceManager.supportsTouch = (function () {
        var isTouchSupported = false;
        if (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) {
            isTouchSupported = true;
        }
        return isTouchSupported;
    })();
    return DeviceManager;
}());
exports.default = DeviceManager;
//# sourceMappingURL=DeviceManager.js.map

/***/ })
/******/ ]);