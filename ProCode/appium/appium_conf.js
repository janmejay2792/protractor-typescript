exports.config={
    // seleniumAddress:'http://localhost:4723/wd/hub',
    directConnect:true,
    
    capabilities:{
        'browserName':'chrome',
        'appium-version':'1.14.1',
        'platformName': 'Android',
        'deviceName': 'emulator-5554',
        "chromedriverExecutable":"D://sdk-tools//chromedriver.exe"
    },
    framework:'jasmine2',
    specs:['./spec/firstAppium.js'],
    jasmoneNodeopts:{
        defautTimeoutInterval:30000
    },
};