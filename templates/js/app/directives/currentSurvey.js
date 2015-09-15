'use strict';
(function() {
    console.log("loading survey...");
    var that = this,
        app = angular.module('survey', []);

    app.directive('currentSurvey', ['$http', function($http) {
        return {
            restrict: "E",
            templateUrl: "templates/survey-template.html",
            controller: function($scope, $sce) {
                $http.get("static/surveyUrl.json").success(function(url) {
                    console.log(url);
                    $scope.source = $sce.trustAsResourceUrl(url.url);
                });
            },
            contollerAs: "survey"
        };
    }]);
})();
