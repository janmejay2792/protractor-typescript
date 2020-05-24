import { browser, element, by} from 'protractor'
import WebTable from '../UtilityFunction/WebTable';


describe('Protractor Typescript Demo', function() {
	browser.ignoreSynchronization = true;
	it('Dynamic table in Protractor ', function() {
		browser.get('https://chercher.tech/protractor/custom-webelement-dynamic-table-protractor');
    browser.sleep(1000)

    let webTable = new WebTable(element(by.id("fixed-header")));
    webTable.getRowCount().then(function(noOfRows:any){
      console.log("No of rows : "+noOfRows)
    })

    webTable.getColumnCount().then(function(noOfColumns:any){
      console.log("No of Columns : "+noOfColumns)
    })

    webTable.getTableSize().row.then(function(rows:number){
      console.log("No Of rows : " +rows)
    })

    webTable.getTableSize().columns.then(function(cols:number){
      console.log("Nof Of columns : " +cols)
    })

    webTable.rowData(1).then(function(rowData:any){
      console.log("Data in row : " +rowData)
    })

    webTable.columnData(1).then(function(colData:any){
      console.log("Data in Column : " +colData)
    })

    webTable.getCellData(1, 2).then(function(cellData:any){
      console.log("Cell data : " +cellData)
    })

    console.log("Presence of data : "+webTable.presenceOfData("google"))

    webTable.getAllData().then(function(totalData:any){
      console.log("Cell data : " +totalData)
    })

    webTable.clickCheckBox("Chercher.tech")
	});
});
