"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe("Automate the Table", function () {
    beforeEach(function () {
        protractor_1.browser.get('http://www.way2automation.com/angularjs-protractor/webtables/');
        protractor_1.browser.sleep(1000);
    });
    it("To check and click the checkbox with Name", function () {
        var row = protractor_1.element.all(protractor_1.by.repeater('dataRow in displayedCollection'));
        row.each(function (row) {
            var cells = row.$$('td');
            cells.get(0).getText().then(function (txt) {
                console.log(txt);
                if (txt == 'admin') {
                    console.log('Yes Admin present');
                    cells.get(9).$$('button').click();
                    protractor_1.browser.sleep(5000);
                }
            });
        });
        protractor_1.element.all(protractor_1.by.xpath("//*[@name='optionsRadios']")).get(1).click();
        var dd = protractor_1.element.all(protractor_1.by.name('RoleId'));
        var options = dd.all(protractor_1.by.tagName('option'));
        options.then(function (txt) {
            var _loop_1 = function (index) {
                txt[index].getText().then(function (text) {
                    if (text == 'Customer') {
                        txt[index].click();
                    }
                });
            };
            for (var index = 0; index < txt.length; index++) {
                _loop_1(index);
            }
        });
        protractor_1.element(protractor_1.by.xpath("//input[@name='Password']")).getCssValue('font-size').then(function (fontSize) {
            console.log(fontSize);
        });
        protractor_1.element(protractor_1.by.xpath("//button[@ng-click='close()']")).getCssValue('background-color').then(function (bgColor) {
            console.log(bgColor);
        });
    });
});
