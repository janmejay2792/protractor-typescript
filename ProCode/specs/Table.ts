import { browser, element, by } from "protractor";


describe("Automate the Table",function(){
    beforeEach(function () {
        browser.get('http://www.way2automation.com/angularjs-protractor/webtables/');
            browser.sleep(1000);
    })
            
    it("To check and click the checkbox with Name",function(){
        let row =element.all(by.repeater('dataRow in displayedCollection'));
        row.each(function(row:any){
            let cells = row.$$('td');
            cells.get(0).getText().then(function(txt:any){
                console.log(txt);
                if (txt=='admin') {
                    console.log('Yes Admin present');
                    cells.get(9).$$('button').click();
                    browser.sleep(5000);
                }
            })
        })
        element.all(by.xpath("//*[@name='optionsRadios']")).get(1).click();
        let dd= element.all(by.name('RoleId'));
        let options = dd.all(by.tagName('option'));
        options.then(function(txt:any){
            for (let index = 0; index < txt.length; index++) {
                txt[index].getText().then(function(text:any){
                    if (text=='Customer') {
                        txt[index].click();
                    }
                })
                
            }
        })
        element(by.xpath("//input[@name='Password']")).getCssValue('font-size').then(function(fontSize:any){
            console.log(fontSize)
        })

        element(by.xpath("//button[@ng-click='close()']")).getCssValue('background-color').then(function(bgColor:any) {
            console.log(bgColor);
          });
    })
});