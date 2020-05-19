import { browser, element, by } from "protractor";

describe('JavascriptExecutor', function () {
    it('Hove and click', function () {
        browser.ignoreSynchronization = true;
        browser.get("http://webdriverjs.com");
        var about = element(by.css('.sf-with-ul'));
        var aboutUs = element(by.xpath("//a[@href='http://www.webdriverjs.com/about/']"));
        browser.executeScript("if(document.createEvent){" +
            "var hoverEventObj = document.createEvent('MouseEvents');" +
            "hoverEventObj.initEvent('mouseover',true,false);" +
            "arguments[0].dispatchEvent(hoverEventObj);" +
            "}" +
            "else if(document.createEventObject){" +
            "arguments[0].fireEvent('onmouseover');" +
            "}arguments[1].click();", about, aboutUs);
    });
});