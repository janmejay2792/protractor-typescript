"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var WebTable_1 = __importDefault(require("../UtilityFunction/WebTable"));
describe('Protractor Typescript Demo', function () {
    protractor_1.browser.ignoreSynchronization = true;
    it('Dynamic table in Protractor ', function () {
        protractor_1.browser.get('https://chercher.tech/protractor/custom-webelement-dynamic-table-protractor');
        protractor_1.browser.sleep(1000);
        var webTable = new WebTable_1.default(protractor_1.element(protractor_1.by.id("fixed-header")));
        webTable.getRowCount().then(function (noOfRows) {
            console.log("No of rows : " + noOfRows);
        });
        webTable.getColumnCount().then(function (noOfColumns) {
            console.log("No of Columns : " + noOfColumns);
        });
        webTable.getTableSize().row.then(function (rows) {
            console.log("No Of rows : " + rows);
        });
        webTable.getTableSize().columns.then(function (cols) {
            console.log("Nof Of columns : " + cols);
        });
        webTable.rowData(1).then(function (rowData) {
            console.log("Data in row : " + rowData);
        });
        webTable.columnData(1).then(function (colData) {
            console.log("Data in Column : " + colData);
        });
        webTable.getCellData(1, 2).then(function (cellData) {
            console.log("Cell data : " + cellData);
        });
        console.log("Presence of data : " + webTable.presenceOfData("google"));
        webTable.getAllData().then(function (totalData) {
            console.log("Cell data : " + totalData);
        });
        webTable.clickCheckBox("Chercher.tech");
    });
});
