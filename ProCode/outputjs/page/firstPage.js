"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var fs = require('fs');
var firstPage = /** @class */ (function () {
    function firstPage() {
        this.firstBox = protractor_1.element(protractor_1.by.model('first'));
        this.secondBox = protractor_1.element(protractor_1.by.model('second'));
        this.goButton = protractor_1.element(protractor_1.by.buttonText('Go!'));
    }
    firstPage.prototype.operator = function (index) {
        var selectOp = protractor_1.element(protractor_1.by.model('operator'));
        var options = selectOp.all(protractor_1.by.tagName('option'));
        options.then(function (ite) {
            ite[index].click();
        });
    };
    firstPage.prototype.writeScreenShot = function (data, filename) {
        var stream = fs.createWriteStream(filename);
        stream.write(new Buffer(data, 'base64'));
        stream.end();
    };
    return firstPage;
}());
exports.default = firstPage;
