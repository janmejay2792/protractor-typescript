import { element, browser, by } from "protractor";

describe('angularjs homepage todo list', function () {
    beforeEach(function () {
        // Entering application url in browser
        browser.get('https://angularjs.org');
    })
    // Test in Jasmine
    // it('should add a todo', function () {
    //     // Finds all H1 elements
    //     var allH1Tags = element.all(by.css('h1'));
    //     //prints count of all elements identified
    //     console.log(allH1Tags.count() + " elements idenitifed");
    //     //Gets the text of first element
    //     console.log("Firt heading: " + allH1Tags.first().getText());
    //     //Gets last element's text
    //     console.log("Last heading: " + allH1Tags.last().getText());
    //     //Get 3rd element
    //     var thirdHeading = allH1Tags.get(2);
    // });
 
    it('Get Locale Date', function () {
        // Entering application url in browser
        // browser.get('https://angularjs.org');
        // Get Locale information
        var parentElement = element.all(by.css('div[title="Localization"]')).first();
        // Find Date
      
        parentElement.element(by.css('span')).getText().then(function (text:any) {
            console.log(text);
            // for(var i=0; i < text.length;i++)
            // {
            //     console.log(text[i].getText());
            // }
        });
      });
});