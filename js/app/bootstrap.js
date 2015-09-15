define([
  'require',
  'angular',
  'angular-route',
  './app'
],
function(require, ng) {
  'use strict';

  require([], function() {
    ng.bootstrap(document, ['pub']);
  });
});
