"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DeviceManager = (function () {
    function DeviceManager(debug, setStatusClasses) {
        this._isDebug = (debug) ? debug : false;
        if (setStatusClasses) {
            this.setStatusClasses();
        }
    }
    DeviceManager.prototype.setStatusClasses = function () {
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
    DeviceManager.isChrome = DeviceManager.checkChromeStatus;
    DeviceManager.isIE = DeviceManager.checkInternetExplorerStatus;
    DeviceManager.isEdge = DeviceManager.checkEdgeStatus;
    DeviceManager.isFirefox = DeviceManager.checkFirefoxStatus;
    DeviceManager.isSafari = DeviceManager.checkSafariStatus;
    DeviceManager.isOpera = DeviceManager.checkOperaStatus;
    DeviceManager.isBlinkEngine = DeviceManager.checkBlinkEngineStatus;
    return DeviceManager;
}());
exports.default = DeviceManager;
//# sourceMappingURL=DeviceManager.js.map