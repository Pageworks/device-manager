"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var DeviceManager = (function () {
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
    DeviceManager.isChrome = (function () {
        var isChrome = false;
        if (!!window.chrome) {
            isChrome = true;
        }
        return isChrome;
    })();
    DeviceManager.isEdge = (function () {
        var isEdge = false;
        if (!_this.isIE && !!window.StyleMedia) {
            isEdge = true;
        }
        return isEdge;
    })();
    DeviceManager.isIE = (function () {
        var isIE = false;
        if (false || !!document.documentMode) {
            isIE = true;
        }
        return isIE;
    })();
    DeviceManager.isFirefox = (function () {
        var isFirefox = false;
        if (typeof InstallTrigger !== 'undefined') {
            isFirefox = true;
        }
        return isFirefox;
    })();
    DeviceManager.isSafari = (function () {
        var isSafari = false;
        if (/constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification))) {
            isSafari = true;
        }
        return isSafari;
    })();
    DeviceManager.isOpera = (function () {
        var isOpera = false;
        if ((!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0) {
            isOpera = true;
        }
        return isOpera;
    })();
    DeviceManager.isBlinkEngine = (function () {
        var isBlink = false;
        if ((DeviceManager.isChrome || DeviceManager.isOpera) && !!window.CSS) {
            isBlink = true;
        }
        return isBlink;
    })();
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