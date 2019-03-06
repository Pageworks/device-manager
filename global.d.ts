export { DeviceManager as default };

export as namespace DeviceManager;

declare class DeviceManager{
    constructor(debug?:boolean, setStatusClasses?:boolean);
    
    isIE:           Function;
    isEdge:         Function;
    isChrome:       Function;
    isOpera:        Function;
    isFirefox:      Function;
    isSafari:       Function;
    isBrinkEngine:  Function;
}


declare namespace DeviceManager{
    
}