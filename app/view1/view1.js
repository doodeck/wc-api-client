'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', 'remoteAPI',
                  function($scope,   remoteAPI) {
  $scope.executeQuery = function() {
    remoteAPI.getWSDL()
      .success(function(data, status, headers, config) {
        console.log('success: ', data, status, headers, config);
      })
      .error(function(data, status, headers, config) {
        console.log('error: ', data, status, headers, config);
      });
  }
}]);