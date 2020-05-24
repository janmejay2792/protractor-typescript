import { browser,element, by } from "protractor";

 

export class CommonKey{
    getByType(locatorType:any){
        locatorType=locatorType.toLowerCase()
        if (locatorType == "id"){
            return by.id
        }
        else if (locatorType == "name"){
            return by.name
        }
        else if (locatorType == "xpath"){
            return by.xpath
        }
        else if (locatorType == "css"){
            return by.css
        }
        else if (locatorType == "class"){
            return by.className
        }
        else if (locatorType == "buttonText"){
            return by.buttonText
        }
        else if(locatorType=="model"){
            return by.model
        } 
        else if(locatorType=="tagName"){
            return by.tagName
        }
        else if(locatorType=="repeater"){
            return by.repeater
        }
        else{
            console.log("failed")
        }
    }

    getElement(locator:any, locatorType:any){
        try {
            let byType:any = this.getByType(locatorType)
            let element1 =  element(byType(locator))
            return element1
        } catch (error) { 
        }
    }
 
    elementClick(locator:any, locatorType:any){
        try {
            this.waitForElement(locator,locatorType);
            let element:any= this.getElement(locator, locatorType)
            element.click()
        } catch (error) {
        }
    }

    elementSendKey(locator:any,locatorType:any,value:any){
        try {
            this.waitForElement(locator,locatorType);
            let element:any = this.getElement(locator, locatorType)
            element.sendKeys(value)
        } catch (error) {
        }
    }
    waitForElement(locator:any,locatorType:any){
        try {
           let byType:any = this.getByType(locatorType)
           let element:any = this.getElement(locator, locatorType)
           let EC=browser.ExpectedConditions;
           browser.wait(EC.visibilityOf(element));
        } catch (error) {
        }
    }
}

 