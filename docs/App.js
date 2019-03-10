import DeviceManager from '../DeviceManager';

(function(){
    new DeviceManager(true, true);

    if(DeviceManager.isChrome){
        var input = document.body.querySelector('.js-chrome .js-status');
        input.classList.add('is-true');
        input.innerHTML = 'true';
    }

    if(DeviceManager.isEdge){
        var input = document.body.querySelector('.js-edge .js-status');
        input.classList.add('is-true');
        input.innerHTML = 'true';
    }

    if(DeviceManager.isIE){
        var input = document.body.querySelector('.js-ie .js-status');
        input.classList.add('is-true');
        input.innerHTML = 'true';
    }

    if(DeviceManager.isFirefox){
        var input = document.body.querySelector('.js-firefox .js-status');
        input.classList.add('is-true');
        input.innerHTML = 'true';
    }

    if(DeviceManager.isSafari){
        var input = document.body.querySelector('.js-safari .js-status');
        input.classList.add('is-true');
        input.innerHTML = 'true';
    }

    if(DeviceManager.isOpera){
        var input = document.body.querySelector('.js-opera .js-status');
        input.classList.add('is-true');
        input.innerHTML = 'true';
    }
})();