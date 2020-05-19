"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var firstPage_1 = __importDefault(require("../page/firstPage"));
// import firstPage from "../page/firstPage";
// import * as prop from 'C:/ProCode/specs/prop.json';
describe("To CHeack the App", function () {
    // let fs= new firstPage();
    it("LH Page", function () {
        var prop = require("./prop");
        // browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
        protractor_1.browser.get(prop.url);
        var EC = protractor_1.browser.ExpectedConditions;
        new firstPage_1.default().firstBox.sendKeys(prop.customer.first);
        protractor_1.browser.takeScreenshot().then(function (png) {
            new firstPage_1.default().writeScreenShot(png, './page/exception.png');
        });
        new firstPage_1.default().operator(1);
        new firstPage_1.default().secondBox.sendKeys(prop.customer.second);
        protractor_1.element(protractor_1.by.buttonText('Go!')).click();
        // new firstPage().goButton.click();
        protractor_1.browser.sleep(6000);
    });
});
