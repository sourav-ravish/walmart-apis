function getBulkUpdatePayload(spreadsheet_dict){
  var payload = {
        "PriceHeader": {
            "version": "1.7"
        },
        "Price": []
    }
  var count = 0
  for (var val in spreadsheet_dict) {
    count = count + 1;
    // Logger.log('Count = '+count);
    // if (count<4) {
    var sku = val;
    var price = spreadsheet_dict[val];
    // Logger.log('Current price for sku = ' + sku + ' is ' + price);
    new_price = price;
    // Logger.log('Changing to ' + new_price);
    var price_object = {
            "sku": sku,
            "pricing": [
                {
                "currentPriceType": "BASE",
                "currentPrice": {
                    "currency": "USD",
                    "amount": new_price
                }
                }
            ]
        }
    payload['Price'].push(price_object);
    //}
    // else{
    //  break;
    // }
    }
  Logger.log('Changing prices of ' + count + ' items.');
  return payload;
}