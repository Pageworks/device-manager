export { DeviceManager as default };

export as namespace DeviceManager;

declare class DeviceManager{
    constructor(debug?:boolean, setStatusClasses?:boolean);
    
    // Browsers
    public static isChrome:Function;
    public static isIE:Function;
    public static isEdge:Function;
    public static isFirefox:Function;
    public static isSafari:Function;
    public static isOpera:Function;

    // Blink Engine
    public static isBlinkEngine:Function;

    // Touch
    public static supportsTouch:Function;
}


declare namespace DeviceManager{
    
}