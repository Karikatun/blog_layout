window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    let popupSignIn = require('./parts/popupSignIn'),
        slider = require('./parts/slider'),
        tabs = require('./parts/tabs'),
        hereBtn = require('./parts/hereBtn');

    popupSignIn();
    slider();
    tabs();
    hereBtn();
});