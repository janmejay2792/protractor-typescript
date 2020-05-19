"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var firstPage_1 = __importDefault(require("../page/firstPage"));
// import firstPage from "../page/firstPage";
var prop = __importStar(require("C:/ProCode/specs/prop.json"));
describe("To CHeack the App", function () {
    // let fs= new firstPage();
    it("LH Page", function () {
        // browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
        protractor_1.browser.get(prop.url);
        var EC = protractor_1.browser.ExpectedConditions;
        new firstPage_1.default().firstBox.sendKeys(prop.customer.first);
        new firstPage_1.default().operator(1);
        new firstPage_1.default().secondBox.sendKeys(prop.customer.second);
        new firstPage_1.default().goButton.click();
        protractor_1.browser.sleep(6000);
    });
});
