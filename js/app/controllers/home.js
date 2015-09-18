'use strict';
(function() {
    var app = angular.module('homeController');
    app.controller('HomeController', ['homeService', function(hs) {
        this.blurb = "";

        hs.getBlurb().success(function(blurb) {
            this.blurb = blurb.blurbText;
        });
    }]);
});
