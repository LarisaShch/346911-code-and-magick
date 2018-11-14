'use strict';
var fireballSize = 22;
var wizardSpeed = 3;
var wizardWidth =70;
var wizardHeight;

var getFireballSpeed = function (left) {
    if (left) {
        return 5;
    } else {
        return 2;
    }
}

var getWizardHeight = function () {
    return wizardHeight = 1.337 * wizardWidth;
}

var getWizardX = function (width) {
    var wizardX;
    return wizardX = width / 2.2;
}

var getWizardY = function (height) {
    var wizardY;
    return wizardY = height / 2;
}