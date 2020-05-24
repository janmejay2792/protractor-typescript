"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var HtmlReporter = require('protractor-beautiful-reporter');
// var HtmlReporter = require('protractor-html-screenshot-reporter');
exports.config = {
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    capabilities: {
        browserName: 'chrome',
        // chromeOptions: {
        //   args: ["--headless", "--disable-gpu", "--window-size=800x600"],
        // },
        // browserName: 'firefox',
        marionette: true,
        acceptSslCert: true
    },
    framework: 'jasmine2',
    // specs: ['./specs/LufPageDataTs.js'],
    suites: {
        regression: ['./specs/DropDownTestcase.js']
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 90000
    },
    onPrepare: function () {
        //  let globals = require('protractor');
        //  jasmine.getEnv().addReporter(reporter)
        //  let browser = globals.browser;
        protractor_1.browser.manage().window().maximize();
        protractor_1.browser.manage().timeouts().implicitlyWait(2000);
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'reports/screenshots',
            screenshotsSubfolder: 'images',
            jsonsSubfolder: 'jsons',
            gatherBrowserLogs: false
            // , pathBuilder: function pathBuilder(spec: any, descriptions: any[], results: any, capabilities: { caps_: { browser: any; }; }) {
            //   return path.join(capabilities.caps_.browser, descriptions.join('-'));
            //   }
        }).getJasmine2Reporter());
    }
};
