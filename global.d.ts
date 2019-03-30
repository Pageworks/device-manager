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

    // Custom Touch Tracking
    public reinit:Function;

    // Network Information
    public static connection: DeviceManager.NetworkInformation;
}

declare namespace DeviceManager{
    interface NetworkInformation{
        readonly type:          string;
        readonly effectiveType: string;
        readonly downlinkMax:   number;
        readonly downlink:      number;
        readonly rtt:           number;
        readonly saveData:      boolean;
        addEventListener:       (event:string, handler:EventListener)=>{};
    }
}