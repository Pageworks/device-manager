import Manager from '../global';

export default class DeviceManager{

    private _isDebug:   boolean;

    // Elements
    private _html:HTMLElement;
    private _body:HTMLElement;

    // Custom Touch Input
    private _trackedElements:Array<Element>;

    // Device/Connection Information
    private _navigator:Navigator;
    public static connection:Manager.NetworkInformation = undefined;

    constructor(debug?:boolean, setStatusClasses?:boolean){
        this._isDebug   = (debug) ? debug : false;

        this._html  = document.documentElement;
        this._body  = document.body;

        this._navigator = window.navigator;
        // @ts-ignore
        DeviceManager.connection = this._navigator.connection || this._navigator.mozConnection || this._navigator.webkitConnection;
        DeviceManager.connection.addEventListener('change', this.handleConnectionChange);

        if(setStatusClasses){
            this.setStatusClasses();
        }

        this._trackedElements   = [];
        this.getTouchElements();
    }

    /**
     * Called when the page has changed and `DeviceManager` needs to handle the new/old touch tracked elements.
     */
    public reinit():void{
        this.purgeTouchElements();
        this.getTouchElements();
    }

    /**
     * Called when the `touchstart` event fires on an element that has a `js-touch` class.
     */
    private userTouchedElement: EventListener = (e:Event)=>{
        const target = <HTMLElement>e.currentTarget;
        target.setAttribute('data-touching', "true");
    }

    /**
     * Called when the `touchend` or `touchcancel` or `touchleave` event(s) fire on
     * an element with the `js-touch` class.
     */
    private userReleasedTouchedElement: EventListener = (e:Event)=>{
        const target = <HTMLElement>e.currentTarget;
        target.setAttribute('data-touching', "false");
    }

    /**
     * Called when the `change` event is fired on `NetworkInformation`.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation#Event_handlers
     */
    private handleConnectionChange:EventListener = (e:Event)=>{
        this._navigator = window.navigator;
        // @ts-ignore
        DeviceManager.connection = this._navigator.connection || this._navigator.mozConnection || this._navigator.webkitConnection;
    }

    /**
     * Get all the elements that require touch tracking if they're not already tracked.
     */
    private getTouchElements():void{
        // Do nothing on non-touch devices
        if(!DeviceManager.supportsTouch){
            return;
        }

        // Create an array of elements with the `.js-touch` class if they're not already tracked
        const elements:Array<Element> = Array.from(document.body.querySelectorAll('.js-touch:not([data-touch-tracked="true"])'));

        elements.forEach((el)=>{
            // Sets tracking attribute
            el.setAttribute('data-touch-tracked', 'true');

            // Sets event listeners
            el.addEventListener('touchstart', this.userTouchedElement );
            el.addEventListener('touchend', this.userReleasedTouchedElement );
            el.addEventListener('touchleave', this.userReleasedTouchedElement );
            el.addEventListener('touchcancel', this.userReleasedTouchedElement );

            // Places element in the arrray
            this._trackedElements.push(el);
        });
    }

    /**
     * Grabs all the current touch elements and removes any that are missing in the DOM.
     */
    private purgeTouchElements(): void{

        // Do nothing on non-touch devices
        if(!DeviceManager.supportsTouch){
            return;
        }

        // Check if there are elements to check
        if(this._trackedElements.length === 0){
            return;
        }

        const currentElements:Array<Element> = Array.from(document.body.querySelectorAll('.js-touch'));
        const deadElements:Array<Element> = [];

        // Loop through all tracked touch elements
        for(let i = 0; i < this._trackedElements.length; i++){
            let survived = false;

            // Compare aginst all current touch elements
            for(let k = 0; k < currentElements.length; k++){
                if(this._trackedElements[i] === currentElements[k]){
                    survived = true;
                }
            }

            // Prepare dead elements for the purge
            if(!survived){
                deadElements.push(this._trackedElements[i]);
            }
        }

        // Verify we have elements to remove
        if(deadElements.length !== 0){

            // Loop though all the elements we need to remove
            for(let k = 0; k < deadElements.length; k++){

                // Loop through all the current elements
                for(let i = 0; i < this._trackedElements.length; i++){

                    // Check if the current element matches the element marked for death
                    if(this._trackedElements[i] === deadElements[i]){
                        // Remove event listeners
                        deadElements[i].removeEventListener('touchstart', this.userTouchedElement );
                        deadElements[i].removeEventListener('touchend', this.userReleasedTouchedElement );
                        deadElements[i].removeEventListener('touchleave', this.userReleasedTouchedElement );
                        deadElements[i].removeEventListener('touchcancel', this.userReleasedTouchedElement );

                        // Get the elements index
                        const index = this._trackedElements.indexOf(this._trackedElements[i]);

                        // Splice the array at the index and shift the remaining elements
                        this._trackedElements.splice(index, 1);
                    }
                }
            }
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

        // Listen for basic device event types
        this._body.addEventListener('mouseover', this.handleMouseEvent);
        this._body.addEventListener('touchstart', this.handleTouchEvent);

        // Set a status class if the device supports touch
        if(DeviceManager.supportsTouch){
            this._html.classList.add('is-touch-device');
            this._html.classList.remove('is-not-touch-device');

            if(this._isDebug){
                console.log('%c[Device Manager] '+`%cSupports Touch: %c${ DeviceManager.supportsTouch }`,'color:#35ffb8','color:#eee', 'color:#68e5ff');
            }
        }

        // Sets a status class if the browser is using the Blink engine
        if(DeviceManager.isBlinkEngine){
            this._html.classList.add('is-blink');

            if(this._isDebug){
                console.log('%c[Device Manager] '+`%cUsing Blink Engine: %c${ DeviceManager.isBlinkEngine }`,'color:#35ffb8','color:#eee', 'color:#68e5ff');
            }
        }

        // Sets a status class if the browser is Chrome
        if(DeviceManager.isChrome){
            this._html.classList.add('is-chrome');

            if(this._isDebug){
                console.log('%c[Device Manager] '+`%cChrome: %c${ DeviceManager.isChrome }`,'color:#35ffb8','color:#eee', 'color:#68e5ff');
            }
        }

        // Sets a status class if the browser is IE 11
        if(DeviceManager.isIE){
            this._html.classList.add('is-ie');

            if(this._isDebug){
                console.log('%c[Device Manager] '+`%cInternet Explorer: %c${ DeviceManager.isIE }`,'color:#35ffb8','color:#eee', 'color:#68e5ff');
            }
        }

        // Sets a status class if the browser is Edge
        if(DeviceManager.isEdge){
            this._html.classList.add('is-edge');

            if(this._isDebug){
                console.log('%c[Device Manager] '+`%cEdge: %c${ DeviceManager.isEdge }`,'color:#35ffb8','color:#eee', 'color:#68e5ff');
            }
        }

        // Sets a status class if the browser is Firefox
        if(DeviceManager.isFirefox){
            this._html.classList.add('is-firefox');

            if(this._isDebug){
                console.log('%c[Device Manager] '+`%cFirefox: %c${ DeviceManager.isFirefox }`,'color:#35ffb8','color:#eee', 'color:#68e5ff');
            }
        }

        // Sets a status class if the browser is Safari
        if(DeviceManager.isSafari){
            this._html.classList.add('is-safari');

            if(this._isDebug){
                console.log('%c[Device Manager] '+`%cSafari: %c${ DeviceManager.isSafari }`,'color:#35ffb8','color:#eee', 'color:#68e5ff');
            }
        }

        // Sets a status class if the browser is Opera
        if(DeviceManager.isOpera){
            this._html.classList.add('is-opera');

            if(this._isDebug){
                console.log('%c[Device Manager] '+`%cOpera: %c${ DeviceManager.isOpera }`,'color:#35ffb8','color:#eee', 'color:#68e5ff');
            }
        }

        // Sets a status class if the device's connection type is known
        if(DeviceManager.connection !== undefined){
            this._html.classList.add(`is-${ DeviceManager.connection.effectiveType }`);

            if(this._isDebug){
                console.log('%c[Device Manager] '+`%cConnection Type: %c${ DeviceManager.connection.effectiveType }`,'color:#35ffb8','color:#eee', 'color:#68e5ff');
            }
        }
    }
    
    /**
     * Called when the `mouseover` event is fired on the body.
     * Sets a status class confirming that the user is using a pointer device (mouse).
     */
    private handleMouseEvent:EventListener = (e:Event)=>{
        this._body.removeEventListener('mouseover', this.handleMouseEvent);
        this._html.classList.add('is-pointer-device');
        this._html.classList.remove('is-not-pointer-device');

        if(this._isDebug){
            console.log('%c[Device Manager] '+`%cUser is using a pointer device`,'color:#35ffb8','color:#eee');
        }
    }

    /**
     * Called when the `touchstart` event is fired on the body.
     * Sets a status class confirming that the user is using touch input.
     */
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
        if(!!window.chrome && (window.StyleMedia === undefined)){
            isChrome = true;
        }

        return isChrome;
    })();

    /**
     * Checks if the browser is Edge 20+.
     * @returns `boolean`
     */
    public static isEdge =(()=>{
        let isEdge = false;

        // @ts-ignore
        if(!!window.StyleMedia && !!window.chrome){
            isEdge = true;
        }

        return isEdge;
    })();

    /**
     * Checks if the browser is Internet Explorer 6 - 11.
     * @returns `boolean`
     */
    public static isIE = (()=>{
        let isIE = false;

        // @ts-ignore
        if(!!window.MSInputMethodContext && !!document.documentMode && (window.chrome === undefined)){
            isIE = true;
        }

        return isIE;
    })();

    /**
     * Checks if the browser is Firefox 1+.
     * @returns `boolean`
     */
    public static isFirefox = (()=>{
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
    public static isSafari = (()=>{
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
    public static isOpera = (()=>{
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
    public static isBlinkEngine = (()=>{
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
    public static supportsTouch = (()=>{
        let isTouchSupported = false;

        if(('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)){
            isTouchSupported = true;
        }

        return isTouchSupported;
    })();
}