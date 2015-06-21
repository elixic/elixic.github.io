'use strict';

angular.module('app.Notes')
    .controller('NotesController', ['$scope', 'notesServices', function($scope, notesServices) {
        console.log('notes controller');
        notesServices.list()
            .success(function (notes) {
               $scope.notes = notes;
            })
            .error(function (err) {

            });
    }]);
