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
    return DeviceManager;
}());
exports.default = DeviceManager;
//# sourceMappingURL=DeviceManager.js.map