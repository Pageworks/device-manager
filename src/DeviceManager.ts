import Manager from './global';

export default class DeviceManager{

    private _isDebug:   boolean;

    // Browsers
    public static isChrome:Function     = DeviceManager.checkChromeStatus;
    public static isIE:Function         = DeviceManager.checkInternetExplorerStatus;
    public static isEdge:Function       = DeviceManager.checkEdgeStatus;
    public static isFirefox:Function    = DeviceManager.checkFirefoxStatus;
    public static isSafari:Function     = DeviceManager.checkSafariStatus;
    public static isOpera:Function      = DeviceManager.checkOperaStatus;

    // Blink Engine
    public static isBlinkEngine:Function    = DeviceManager.checkBlinkEngineStatus;

    constructor(debug?:boolean, setStatusClasses?:boolean){
        this._isDebug   = (debug) ? debug : false;

        if(setStatusClasses){
            this.setStatusClasses();
        }
    }

    /**
     * Sets custom status classes on the HTML Document.
     */
    private setStatusClasses():void{

    }

    /**
     * Checks if the browser is Chrome 1 - 71.
     * @returns `boolean`
     */
    private static checkChromeStatus():boolean{
        let isChrome = false;

        // @ts-ignore
        if(!!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)){
            isChrome = true;
        }

        return isChrome;
    }

    /**
     * Checks if the browser is Edge 20+.
     * @returns `boolean`
     */
    private static checkEdgeStatus():boolean{
        let isEdge = false;

        // @ts-ignore
        if(!DeviceManager.isIE && !!window.StyleMedia){
            isEdge = true;
        }

        return isEdge;
    }

    /**
     * Checks if the browser is Internet Explorer 6 - 11.
     * @returns `boolean`
     */
    private static checkInternetExplorerStatus():boolean{
        let isIE = false;

        // @ts-ignore
        if(isIE = /*@cc_on!@*/false || !!document.documentMode){
            isIE = true;
        }

        return isIE;
    }

    /**
     * Checks if the browser is Firefox 1+.
     * @returns `boolean`
     */
    private static checkFirefoxStatus():boolean{
        let isFirefox = false;

        // @ts-ignore
        if(typeof InstallTrigger !== 'undefined'){
            isFirefox = true;
        }

        return isFirefox;
    }

    /**
     * Checks if the browser is Safari 3+.
     * @returns `boolean`
     */
    private static checkSafariStatus():boolean{
        let isSafari = false;

        // @ts-ignore
        if(/constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification))){
            isSafari = true;
        }
        
        return isSafari;
    }

    /**
     * Checks if the browser is Opera 8+.
     * @returns `boolean`
     */
    private static checkOperaStatus():boolean{
        let isOpera = false;

        // @ts-ignore
        if((!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0){
            isOpera = true;
        }

        return isOpera;
    }

    /**
     * Checks if the browser is using the Blink Engine.
     * @see https://en.wikipedia.org/wiki/Blink_(browser_engine)
     * @returns `boolean`
     */
    private static checkBlinkEngineStatus():boolean{
        let isBlink = false;

        // @ts-ignore
        if((DeviceManager.isChrome || DeviceManager.isOpera) && !!window.CSS){
            isBlink = true;
        }
        
        return isBlink;
    }
}