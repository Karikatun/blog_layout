window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    let popupSignIn = require('./parts/popupSignIn'),
        slider = require('./parts/slider');

    popupSignIn();
    slider();
});