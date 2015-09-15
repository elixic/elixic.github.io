define([
    './module'
],
function(emailFormModule) {
  return ['$http', function ($http) {
    return {
      store: function (email) {
        var payload = {
          "email": email
        };
        return $http.post("saveEmail", payload);
      }
    }
  }];
});
