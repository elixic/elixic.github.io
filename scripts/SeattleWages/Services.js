'use strict';

angular.module('app.SeattleWages')
    .factory('seattleWagesServices', ['$http', function($http) {
        return {
            list: function() {
                $http.get('https://data.seattle.gov/api/views/cf52-s8er/rows.json?accessType=DOWNLOAD');
            }
        }
    }]);