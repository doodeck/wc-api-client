'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.view3.controller',
  'myApp.view3.directives',
  'myApp.version',
  'myApp.settings',
  'myApp.remoteapi',
  'myApp.config'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
