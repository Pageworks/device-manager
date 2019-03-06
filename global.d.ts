export { DeviceManager as default };

export as namespace DeviceManager;

declare class DeviceManager{
    constructor(debug?:boolean, setStatusClasses?:boolean);
    
    // Browsers
    public static isChrome:     boolean;
    public static isIE:         boolean;
    public static isEdge:       boolean;
    public static isFirefox:    boolean;
    public static isSafari:     boolean;
    public static isOpera:      boolean;

    // Blink Engine
    public static isBlinkEngine:boolean;

    // Touch
    public static supportsTouch:boolean;
}


declare namespace DeviceManager{
    
}