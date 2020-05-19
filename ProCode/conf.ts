import { browser, Config } from 'protractor';
import reporter = require('./jasmine_reporter');
import path = require('path');
var HtmlReporter = require('protractor-beautiful-reporter');
// var HtmlReporter = require('protractor-html-screenshot-reporter');
export let config: Config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    browserName: 'chrome',
    // chromeOptions: {
    //   args: ["--headless", "--disable-gpu", "--window-size=800x600"],
    // },
    // browserName: 'firefox',
    marionette:true,
    acceptSslCert : true
    },
  framework: 'jasmine2',
  // specs: ['./specs/LufPageDataTs.js'],
  suites:{
    regression: ['./specs/LufPageDataTs.js']
  },
  jasmineNodeOpts: {
    defaultTimeoutInterval: 90000
  },
  onPrepare: () => {
  //  let globals = require('protractor');
  //  jasmine.getEnv().addReporter(reporter)
  //  let browser = globals.browser;
   browser.manage().window().maximize();
   browser.manage().timeouts().implicitlyWait(2000);
   jasmine.getEnv().addReporter(new HtmlReporter({
  baseDirectory: 'reports/screenshots'
  , screenshotsSubfolder: 'images'
  , jsonsSubfolder: 'jsons'
  
  , gatherBrowserLogs: false
  // , pathBuilder: function pathBuilder(spec: any, descriptions: any[], results: any, capabilities: { caps_: { browser: any; }; }) {
  //   return path.join(capabilities.caps_.browser, descriptions.join('-'));
  //   }
    }).getJasmine2Reporter());

 }
}