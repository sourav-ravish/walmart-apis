function bulkUpdate() {
  url = "https://marketplace.walmartapis.com/v3/feeds?feedType=price"
  var payload = getBulkUpdatePayload(readSpreadsheet());
  headers = {
        'accept': 'application/json',
        'WM_QOS.CORRELATION_ID': Utilities.getUuid(),
        'WM_SVC.NAME': 'Walmart Marketplace',
        'Authorization': getAuthorization(),
        'Content-Type': 'application/json',
        'WM_SEC.ACCESS_TOKEN': getToken()
  }
  var requestOptions = {
    method: 'post',
    headers: headers,
    payload: JSON.stringify(payload)
  };
  var bulk_update_response = UrlFetchApp.fetch(url, requestOptions);
  const feedId = JSON.parse(bulk_update_response.getContentText())['feedId']
  writeToSpreadsheet(feedId);
  Logger.log('Update successful!')
}

