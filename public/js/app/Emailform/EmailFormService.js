define([
    './module'
],
function(emailFormModule) {
    'use strict';

    emailFormModule
        .factory('emailFormService', ['$http', function ($http) {
            return {
                store: function (email) {
                    var payload = {
                      "email": email
                    };
                    return $http.post("saveEmail", payload);
                }
            }
        }]);
});
