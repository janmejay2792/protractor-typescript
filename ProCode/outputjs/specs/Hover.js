"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe('JavascriptExecutor', function () {
    it('Hove and click', function () {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.get("http://webdriverjs.com");
        var about = protractor_1.element(protractor_1.by.css('.sf-with-ul'));
        var aboutUs = protractor_1.element(protractor_1.by.xpath("//a[@href='http://www.webdriverjs.com/about/']"));
        protractor_1.browser.executeScript("if(document.createEvent){" +
            "var hoverEventObj = document.createEvent('MouseEvents');" +
            "hoverEventObj.initEvent('mouseover',true,false);" +
            "arguments[0].dispatchEvent(hoverEventObj);" +
            "}" +
            "else if(document.createEventObject){" +
            "arguments[0].fireEvent('onmouseover');" +
            "}arguments[1].click();", about, aboutUs);
    });
});
