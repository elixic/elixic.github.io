'use strict';

angular.module('app.Notes')
    .factory('notesServices', ['$http', function($http) {
        return {
            list: function() {
                return $http.get('data/notes.json');
            }
        }
    }]);
