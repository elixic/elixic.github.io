'use strict';

angular.module('app.People')
    .controller('PeopleController', ['$scope', 'peopleServices', function($scope, peopleServices) {
        console.log('people controller');
        peopleServices.list()
            .success(function (people) {
               $scope.people = people;
            })
            .error(function (err) {

            });
    }]);