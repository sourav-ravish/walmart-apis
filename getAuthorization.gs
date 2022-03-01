function getAuthorization() {
  var creds = {
    "client_id": "2b6ba438-2372-45c9-95c1-f4947f7b1157",
    "client_secret": "cu6WfG4dmXGDvkb_rk9z2Psz8rfZhZRJjIh0NpXOWMB6bSqyFu2eGc4G9oMzhvnxvO55uB4Dz0PyXMZbiMb5mQ"
  }
  encoded_creds = Utilities.base64Encode(creds['client_id']+":"+creds['client_secret']);
  // Logger.log(encoded_creds);
  return 'Basic ' + encoded_creds;
}
