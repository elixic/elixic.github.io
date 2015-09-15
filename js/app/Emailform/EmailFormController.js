define([
    './module'
],
function(emailFormModule) {
    'use strict';

    emailFormModule
        .controller('EmailFormController', ['$scope', 'emailFormService', function($scope, emailService) {
            console.log('intializing form controller...');

            $scope.send = function() {
                console.log('send clicked...');

                emailService.store($scope.email.address)
                    .success(function(result) {
                        console.log(result);
                    })
                    .error(function(err) {
                        console.log(err);
                    });
            };
        }]);
});
