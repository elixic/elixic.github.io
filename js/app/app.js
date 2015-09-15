define([
  'angular',
  'angular-route',
  './Emailform/index'
],
function (ng, ngRoute) {
  'use strict';
  var app = ng.module('pub', ['ngRoute', 'pub.EmailForm']);

  app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'templates/MailChimpTemplate.html',
      controller: 'EmailFormController'
    });
  }]);
  return app;
});
