import Manager from './global';

export default class DeviceManager{

    private _isDebug:   boolean;

    constructor(debug?:boolean, setStatusClasses?:boolean){
        this._isDebug   = (debug) ? debug : false;

        if(setStatusClasses){
            this.setStatusClasses();
        }
    }

    private setStatusClasses():void{
        
    }
}