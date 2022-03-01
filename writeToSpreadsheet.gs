function writeToSpreadsheet(feedId){
  Logger.log('Writing Feed ID to sheet FeedIDs')
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[1];
  t = Utilities.formatDate(new Date(), "GMT", "yyyy-MM-dd' 'HH:mm:ss' '");
  sheet.appendRow([t, feedId])
}