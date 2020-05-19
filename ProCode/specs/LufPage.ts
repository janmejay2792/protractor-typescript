import { browser, element,by } from "protractor"
import firstPage from "../page/firstPage";
// import firstPage from "../page/firstPage";
import * as prop from 'C:/ProCode/specs/prop.json';
describe("To CHeack the App", function(){
    // let fs= new firstPage();
    it("LH Page",function(){
        // browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
        browser.get((<any>prop).url);
        let EC=browser.ExpectedConditions;
        new firstPage().firstBox.sendKeys((<any>prop).customer.first);
        new firstPage().operator(1);
        new firstPage().secondBox.sendKeys((<any>prop).customer.second);
        new firstPage().goButton.click();
        browser.sleep(6000)

    })
})