'use strict';
(function() {
    var app = angular.module('homeService');
    app.factory('homeService', ['$http', function($http) {
        return {
            getBlurb: function() {
                return $http.get('/static/blurb.json');
            }
        };
    }]);
});
