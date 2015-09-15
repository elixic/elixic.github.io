define([
  'require',
  'angular',
  './app'
],
function(require, ng) {
  'use strict';

  require([], function() {
    ng.bootstrap(document, ['pub']);
  });
});
