"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var Select = /** @class */ (function () {
    //constructor  accepts dropdown as element
    function Select(webTableElement) {
        this.webTable = webTableElement;
    }
    // get the number of rows present
    Select.prototype.getRowCount = function () {
        console.log("Fetching number rows");
        return this.webTable.all(protractor_1.by.css("tr")).count();
    };
    // get the number of columns present
    Select.prototype.getColumnCount = function () {
        return this.webTable.all(protractor_1.by.css("th")).count();
        // if you donot have header then above will not work
        // use this if no headre is there
        // return this.webTable.all(by.xpath("//tr[0]/td")).count()
    };
    // get the number of rows and columns and return it as Map
    Select.prototype.getTableSize = function () {
        return { row: this.webTable.all(protractor_1.by.css("tr")).count(),
            columns: this.webTable.all(protractor_1.by.css("th")).count() };
    };
    // get row data and return it as list
    Select.prototype.rowData = function (rowNumber) {
        if (rowNumber == 0) {
            throw new Error("Row number starts from 1");
        }
        rowNumber = rowNumber + 1;
        return this.webTable.all(protractor_1.by.xpath("//tr[" + rowNumber + "]/td")).getText();
    };
    // get the column data and return as list
    Select.prototype.columnData = function (columnNumber) {
        if (columnNumber == 0) {
            throw new Error("Column number starts from 1");
        }
        columnNumber = columnNumber + 1;
        return this.webTable.all(protractor_1.by.xpath("//tr/td[" + columnNumber + "]")).getText();
    };
    // get all the data from the table
    Select.prototype.getAllData = function () {
        return this.webTable.all(protractor_1.by.xpath("td")).getText();
    };
    // verify presence of the text/data
    Select.prototype.presenceOfData = function (data) {
        // verify the data by getting the size of the element matches based on the text/data passed
        return this.webTable.all(protractor_1.by.xpath("//td[normalize-space(text())='" + data + "']"))
            .size().then(function (dataSize) {
            if (dataSize > 0) {
                return true;
            }
            else {
                return false;
            }
        });
    };
    // get the data from a specific cell
    Select.prototype.getCellData = function (rowNumber, columnNumber) {
        if (rowNumber == 0) {
            throw new Error("Row number starts from 1");
        }
        rowNumber = rowNumber + 1;
        var cellData = this.webTable.element(protractor_1.by.xpath("//tr[" + rowNumber + "]/td[" + columnNumber + "]")).getText();
        return cellData;
    };
    // click checkbox with protractor
    Select.prototype.clickCheckBox = function (data) {
        this.webTable.element(protractor_1.by.xpath("//td[normalize-space(text())='" + data + "']/..//input")).click();
    };
    return Select;
}());
exports.default = Select;
