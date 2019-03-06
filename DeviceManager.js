"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DeviceManager = (function () {
    function DeviceManager(debug, setStatusClasses) {
        var _this = this;
        this.handleMouseEvent = function (e) {
            _this._body.removeEventListener('mouseover', _this.handleMouseEvent);
            _this._html.classList.add('is-pointer-device');
            _this._html.classList.remove('is-not-pointer-device');
        };
        this.handleTouchEvent = function (e) {
            _this._body.removeEventListener('touchstart', _this.handleTouchEvent);
            _this._html.classList.add('is-touch-device');
            _this._html.classList.remove('is-not-touch-device');
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
        this._html.classList.add('is-not-pointer-device');
        this._html.classList.add('is-not-touch-device');
        this._body.addEventListener('mouseover', this.handleMouseEvent);
        this._body.addEventListener('touchstart', this.handleTouchEvent);
        if (DeviceManager.isBlinkEngine) {
            this._html.classList.add('is-blink');
        }
        if (DeviceManager.isChrome) {
            this._html.classList.add('is-chrome');
        }
        if (DeviceManager.isIE) {
            this._html.classList.add('is-ie');
        }
        if (DeviceManager.isEdge) {
            this._html.classList.add('is-edge');
        }
        if (DeviceManager.isFirefox) {
            this._html.classList.add('is-firefox');
        }
        if (DeviceManager.isSafari) {
            this._html.classList.add('is-safari');
        }
        if (DeviceManager.isOpera) {
            this._html.classList.add('is-opera');
        }
    };
    DeviceManager.checkChromeStatus = function () {
        var isChrome = false;
        if (!!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)) {
            isChrome = true;
        }
        return isChrome;
    };
    DeviceManager.checkEdgeStatus = function () {
        var isEdge = false;
        if (!DeviceManager.isIE && !!window.StyleMedia) {
            isEdge = true;
        }
        return isEdge;
    };
    DeviceManager.checkInternetExplorerStatus = function () {
        var isIE = false;
        if (isIE = false || !!document.documentMode) {
            isIE = true;
        }
        return isIE;
    };
    DeviceManager.checkFirefoxStatus = function () {
        var isFirefox = false;
        if (typeof InstallTrigger !== 'undefined') {
            isFirefox = true;
        }
        return isFirefox;
    };
    DeviceManager.checkSafariStatus = function () {
        var isSafari = false;
        if (/constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification))) {
            isSafari = true;
        }
        return isSafari;
    };
    DeviceManager.checkOperaStatus = function () {
        var isOpera = false;
        if ((!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0) {
            isOpera = true;
        }
        return isOpera;
    };
    DeviceManager.checkBlinkEngineStatus = function () {
        var isBlink = false;
        if ((DeviceManager.isChrome || DeviceManager.isOpera) && !!window.CSS) {
            isBlink = true;
        }
        return isBlink;
    };
    DeviceManager.checkTouchSupport = function () {
        var isTouchSupported = false;
        if (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) {
            isTouchSupported = true;
        }
        return isTouchSupported;
    };
    DeviceManager.isChrome = DeviceManager.checkChromeStatus;
    DeviceManager.isIE = DeviceManager.checkInternetExplorerStatus;
    DeviceManager.isEdge = DeviceManager.checkEdgeStatus;
    DeviceManager.isFirefox = DeviceManager.checkFirefoxStatus;
    DeviceManager.isSafari = DeviceManager.checkSafariStatus;
    DeviceManager.isOpera = DeviceManager.checkOperaStatus;
    DeviceManager.isBlinkEngine = DeviceManager.checkBlinkEngineStatus;
    DeviceManager.supportsTouch = DeviceManager.checkTouchSupport;
    return DeviceManager;
}());
exports.default = DeviceManager;
//# sourceMappingURL=DeviceManager.js.map