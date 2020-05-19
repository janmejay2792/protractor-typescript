import { ElementFinder, browser, by, element } from 'protractor';
describe('Screenshots', function () {
    it('Failing spec', function () {
        browser.get('http://angularjs.org');
        // browser.pause();
        element.all(by.tagName('a')).count().then(function (count) { expect(count).toEqual(0); });
    });
});