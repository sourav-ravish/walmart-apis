function getToken() {
  headers = {
    'accept': 'application/json',
    'WM_QOS.CORRELATION_ID': Utilities.getUuid(),
    'WM_SVC.NAME': 'Walmart Marketplace',
    'Authorization': getAuthorization()
  }
  payload='grant_type=client_credentials'
  var requestOptions = {
    method: 'post',
    headers: headers,
    payload: payload
  };
  var token_response = UrlFetchApp.fetch("https://marketplace.walmartapis.com/v3/token", requestOptions);
  Logger.log(JSON.parse(token_response.getContentText()).access_token);
  // Logger.log(Utilities.getUuid());
  return JSON.parse(token_response.getContentText()).access_token;
}