"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe('angularjs homepage todo list', function () {
    it('should add a todo', function () {
        console.log('Hello');
        // browser.sleep(2000);
        protractor_1.browser.get('https://angularjs.org'); // Entering application url in browser
    });
});
