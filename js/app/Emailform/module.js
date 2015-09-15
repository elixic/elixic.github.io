define([
    'angular',
    './EmailFormController',
    './EmailFormService'
], function(ng, controller, service) {
  var app = ng.module('pub.EmailForm',[]);
  app.controller('EmailFormController', controller);
  app.factory('emailFormService', service);

  return app;
});
