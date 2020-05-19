

import { browser, element, by } from "protractor";


describe("Automate the Table",function(){
    beforeEach(function () {
        browser.get('http://www.way2automation.com/angularjs-protractor/checkboxes/');
            browser.sleep(1000);
    })
    
    it("To check the checkbox",function(){
        let listChk =element.all(by.css('h3'));
        listChk.$$('h4').then(function(txt:any){
            console.log(txt.getText());
        })
        // console.log(listChk.getText());
        // listChk.each(function(){
        //     let inp=listChk.$$('input');
        //     inp.get(2).getText().then(function(txt:any){
        //         console.log(txt)
        //     })
        // })

        
    })
  

});