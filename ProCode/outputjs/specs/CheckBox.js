"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe("Automate the Table", function () {
    beforeEach(function () {
        protractor_1.browser.get('http://www.way2automation.com/angularjs-protractor/checkboxes/');
        protractor_1.browser.sleep(1000);
    });
    it("To check the checkbox", function () {
        var listChk = protractor_1.element.all(protractor_1.by.css('h3'));
        listChk.$$('h4').then(function (txt) {
            console.log(txt.getText());
        });
        // console.log(listChk.getText());
        // listChk.each(function(){
        //     let inp=listChk.$$('input');
        //     inp.get(2).getText().then(function(txt:any){
        //         console.log(txt)
        //     })
        // })
    });
});
