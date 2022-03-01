function readSpreadsheet(){
  Logger.log('Reading sheet')
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  var rows = sheet.getLastRow();
  // var rows = 4

  var data = sheet.getDataRange().getValues();
  
  spreadsheet_dict = {}
  for(var r = 1; r < rows; r++) {
    sku = data[r][1];
    price = data[r][6];
    spreadsheet_dict[sku] = price;
  }
  Logger.log(spreadsheet_dict)
  return spreadsheet_dict;
}