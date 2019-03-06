import Manager from '../global';

export default class DeviceManager{

    private _isDebug:   boolean;

    // Elements
    private _html:  HTMLElement;
    private _body:  HTMLElement;

    constructor(debug?:boolean, setStatusClasses?:boolean){
        this._isDebug   = (debug) ? debug : false;

        this._html  = document.documentElement;
        this._body  = document.body;

        if(setStatusClasses){
            this.setStatusClasses();
        }
    }

    /**
     * Sets custom status classes on the HTML Document.
     */
    private setStatusClasses():void{
        this._html.classList.add('has-js');
        this._html.classList.remove('has-no-js');

        if(this._isDebug){
            console.log('%c[Device Manager] '+`%cSetting status classes`,'color:#35ffb8','color:#eee');
        }

        this._body.addEventListener('mouseover', this.handleMouseEvent);
        this._body.addEventListener('touchstart', this.handleTouchEvent);

        if(DeviceManager.supportsTouch){
            this._html.classList.add('is-touch-device');
            this._html.classList.remove('is-not-touch-device');

            if(this._isDebug){
                console.log('%c[Device Manager] '+`%cSupports Touch: %c${ DeviceManager.supportsTouch }`,'color:#35ffb8','color:#eee', 'color:#68e5ff');
            }
        }

        if(DeviceManager.isBlinkEngine){
            this._html.classList.add('is-blink');

            if(this._isDebug){
                console.log('%c[Device Manager] '+`%cUsing Blink Engine: %c${ DeviceManager.isBlinkEngine }`,'color:#35ffb8','color:#eee', 'color:#68e5ff');
            }
        }

        if(DeviceManager.isChrome){
            this._html.classList.add('is-chrome');

            if(this._isDebug){
                console.log('%c[Device Manager] '+`%cChrome: %c${ DeviceManager.isChrome }`,'color:#35ffb8','color:#eee', 'color:#68e5ff');
            }
        }

        if(DeviceManager.isIE){
            this._html.classList.add('is-ie');

            if(this._isDebug){
                console.log('%c[Device Manager] '+`%cInternet Explorer: %c${ DeviceManager.isIE }`,'color:#35ffb8','color:#eee', 'color:#68e5ff');
            }
        }

        if(DeviceManager.isEdge){
            this._html.classList.add('is-edge');

            if(this._isDebug){
                console.log('%c[Device Manager] '+`%cEdge: %c${ DeviceManager.isEdge }`,'color:#35ffb8','color:#eee', 'color:#68e5ff');
            }
        }

        if(DeviceManager.isFirefox){
            this._html.classList.add('is-firefox');

            if(this._isDebug){
                console.log('%c[Device Manager] '+`%cFirefox: %c${ DeviceManager.isFirefox }`,'color:#35ffb8','color:#eee', 'color:#68e5ff');
            }
        }

        if(DeviceManager.isSafari){
            this._html.classList.add('is-safari');

            if(this._isDebug){
                console.log('%c[Device Manager] '+`%cSafari: %c${ DeviceManager.isSafari }`,'color:#35ffb8','color:#eee', 'color:#68e5ff');
            }
        }

        if(DeviceManager.isOpera){
            this._html.classList.add('is-opera');

            if(this._isDebug){
                console.log('%c[Device Manager] '+`%cOpera: %c${ DeviceManager.isOpera }`,'color:#35ffb8','color:#eee', 'color:#68e5ff');
            }
        }
    }
    
    private handleMouseEvent:EventListener = (e:Event)=>{
        this._body.removeEventListener('mouseover', this.handleMouseEvent);
        this._html.classList.add('is-pointer-device');
        this._html.classList.remove('is-not-pointer-device');

        if(this._isDebug){
            console.log('%c[Device Manager] '+`%cUser is using a pointer device`,'color:#35ffb8','color:#eee');
        }
    }

    private handleTouchEvent:EventListener = (e:Event)=>{
        this._body.removeEventListener('touchstart', this.handleTouchEvent);
        this._html.classList.add('has-touched');

        if(this._isDebug){
            console.log('%c[Device Manager] '+`%cUser has touched their device`,'color:#35ffb8','color:#eee');
        }
    }

    /**
     * Checks if the browser is Chrome 1 - 71.
     * @returns `boolean`
     */
    public static isChrome = (()=>{
        let isChrome = false;

        // @ts-ignore
        if(!!window.chrome){
            isChrome = true;
        }

        return isChrome;
    })();

    /**
     * Checks if the browser is Edge 20+.
     * @returns `boolean`
     */
    private static isEdge =(()=>{
        let isEdge = false;

        // @ts-ignore
        if(!this.isIE && !!window.StyleMedia){
            isEdge = true;
        }

        return isEdge;
    })();

    /**
     * Checks if the browser is Internet Explorer 6 - 11.
     * @returns `boolean`
     */
    private static isIE = (()=>{
        let isIE = false;

        // @ts-ignore
        if(/*@cc_on!@*/false || !!document.documentMode){
            isIE = true;
        }

        return isIE;
    })();

    /**
     * Checks if the browser is Firefox 1+.
     * @returns `boolean`
     */
    private static isFirefox = (()=>{
        let isFirefox = false;

        // @ts-ignore
        if(typeof InstallTrigger !== 'undefined'){
            isFirefox = true;
        }

        return isFirefox;
    })();

    /**
     * Checks if the browser is Safari 3+.
     * @returns `boolean`
     */
    private static isSafari = (()=>{
        let isSafari = false;

        // @ts-ignore
        if(/constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification))){
            isSafari = true;
        }
        
        return isSafari;
    })();

    /**
     * Checks if the browser is Opera 8+.
     * @returns `boolean`
     */
    private static isOpera = (()=>{
        let isOpera = false;

        // @ts-ignore
        if((!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0){
            isOpera = true;
        }

        return isOpera;
    })();

    /**
     * Checks if the browser is using the Blink Engine.
     * @see https://en.wikipedia.org/wiki/Blink_(browser_engine)
     * @returns `boolean`
     */
    private static isBlinkEngine = (()=>{
        let isBlink = false;

        // @ts-ignore
        if((DeviceManager.isChrome || DeviceManager.isOpera) && !!window.CSS){
            isBlink = true;
        }
        
        return isBlink;
    })();

    /**
     * Checks if the browser supports touch input.
     * @returns `boolean`
     */
    private static supportsTouch = (()=>{
        let isTouchSupported = false;

        if(('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)){
            isTouchSupported = true;
        }

        return isTouchSupported;
    })();
}