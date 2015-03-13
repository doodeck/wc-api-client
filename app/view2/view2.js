'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', 'WCSettings', 'remoteAPI',
                  function($scope,   WCSettings,   remoteAPI) {
  $scope.hostname = WCSettings.getHost(); // "http://localhost";

  $scope.$watch('hostname', function(newVal, oldVal, scope) {
    console.log('Watching happily: ', newVal, oldVal, scope);
    if (newVal !== oldVal) {
      WCSettings.setHost(newVal);
    }
    remoteAPI.setHost(newVal); // that service has no defaulr, so neds initialization
  });
}]);