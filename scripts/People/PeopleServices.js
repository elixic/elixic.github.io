'use strict';

angular.module('app.People')
    .factory('peopleServices', ['$http', function($http) {
        return {
            list: function() {
                return $http.get('data/people.json');
            }
        }
    }]);