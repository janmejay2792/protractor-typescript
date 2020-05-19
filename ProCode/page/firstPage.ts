import {by,element} from 'protractor';
let fs = require('fs');
class firstPage{
    public firstBox =element(by.model('first'));
    public secondBox = element(by.model('second'));
    public goButton = element(by.buttonText('Go!'));
    
   
          
    operator(index:number) {
        let selectOp=element(by.model('operator'));
        let options=selectOp.all(by.tagName('option'));
        options.then(function(ite){
            ite[index].click();
        }) 
    } 
    writeScreenShot(data: string, filename: any) {
        var stream = fs.createWriteStream(filename);
        stream.write(new Buffer(data, 'base64'));
        stream.end();
    } 
        
}
export default firstPage;