import { browser,element,by } from "protractor";

describe('Evaluate Demo', function () {
    it('Evaluate ng-bind for multiple elements', function () {
        browser.get('http://www.weather.com');
        element.all(by.css('*[data-ng-bind]')).then(function (eles) {
            eles.forEach(function (element) {
                element.getAttribute('data-ng-bind').then(function (attrValue:any) {
                    element.evaluate(attrValue).then(function (res:any) {
                        console.log(res);
                    });
                });
            });
        });
    });
});