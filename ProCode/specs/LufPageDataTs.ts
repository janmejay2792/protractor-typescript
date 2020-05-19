import { browser, element,by } from "protractor"
import firstPage from "../page/firstPage";
// import firstPage from "../page/firstPage";
// import * as prop from 'C:/ProCode/specs/prop.json';

describe("To CHeack the App", function(){
    // let fs= new firstPage();
    
    
    it("LH Page",function(){
        let prop= require("./prop")
        // browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
        browser.get(prop.url);
        let EC=browser.ExpectedConditions;
        new firstPage().firstBox.sendKeys(prop.customer.first);
        browser.takeScreenshot().then(function (png) {
           new firstPage(). writeScreenShot(png, './page/exception.png');
        });
        new firstPage().operator(1);
        new firstPage().secondBox.sendKeys(prop.customer.second);
        element(by.buttonText('Go!')).click();
        // new firstPage().goButton.click();
        browser.sleep(6000)

    })
})