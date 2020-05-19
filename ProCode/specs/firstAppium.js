const { browser } = require("protractor")


describe("To CHeack the App", function(){
    // let fs= new firstPage();
    it("LH Page",function(){
        browser.ignoreSynchronization = false;
        browser.sleep(10000);
        browser.get('https://www.tothenew.com/blog/mobile-web-automation-using-protractor/')
        // browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
        //browser.get('https://www.tothenew.com/blog/mobile-web-automation-using-protractor/');
        
    })
})