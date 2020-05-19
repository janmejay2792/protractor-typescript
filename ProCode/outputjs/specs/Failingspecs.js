"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe('Screenshots', function () {
    it('Failing spec', function () {
        protractor_1.browser.get('http://angularjs.org');
        // browser.pause();
        protractor_1.element.all(protractor_1.by.tagName('a')).count().then(function (count) { expect(count).toEqual(0); });
    });
});
