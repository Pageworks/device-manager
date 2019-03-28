import DeviceManager from '../DeviceManager';
import Pjax from '@codewithkyle/pjax';

(function(){
    new Pjax({debug: true});
    const dm = new DeviceManager(true, true);

    document.addEventListener('pjax:complete', ()=>{
        dm.reinit();
    });

    if(DeviceManager.isChrome){
        var target = document.body.querySelector('.js-chrome');
        target.classList.add('is-true');
        const status = target.querySelector('.js-status');
        status.innerHTML = 'Chrome Detected';
        status.classList.add('is-true');
    }

    if(DeviceManager.isEdge){
        var target = document.body.querySelector('.js-edge');
        target.classList.add('is-true');
        const status = target.querySelector('.js-status');
        status.innerHTML = 'Edge Detected';
        status.classList.add('is-true');
    }

    if(DeviceManager.isIE){
        var target = document.body.querySelector('.js-ie');
        target.classList.add('is-true');
        const status = target.querySelector('.js-status');
        status.innerHTML = 'IE 11 Detected';
        status.classList.add('is-true');
    }

    if(DeviceManager.isFirefox){
        var target = document.body.querySelector('.js-firefox');
        target.classList.add('is-true');
        const status = target.querySelector('.js-status');
        status.innerHTML = 'Firefox Detected';
        status.classList.add('is-true');
    }

    if(DeviceManager.isSafari){
        var target = document.body.querySelector('.js-safari');
        target.classList.add('is-true');
        const status = target.querySelector('.js-status');
        status.innerHTML = 'Safari Detected';
        status.classList.add('is-true');
    }

    if(DeviceManager.isOpera){
        var target = document.body.querySelector('.js-opera');
        target.classList.add('is-true');
        const status = target.querySelector('.js-status');
        status.innerHTML = 'Opera Detected';
        status.classList.add('is-true');
    }
})();