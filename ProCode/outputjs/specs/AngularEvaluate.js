"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe('Evaluate Demo', function () {
    it('Evaluate ng-bind for multiple elements', function () {
        protractor_1.browser.get('http://www.weather.com');
        protractor_1.element.all(protractor_1.by.css('*[data-ng-bind]')).then(function (eles) {
            eles.forEach(function (element) {
                element.getAttribute('data-ng-bind').then(function (attrValue) {
                    element.evaluate(attrValue).then(function (res) {
                        console.log(res);
                    });
                });
            });
        });
    });
});
