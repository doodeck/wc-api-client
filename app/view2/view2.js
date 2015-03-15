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
  var consumer = WCSettings.getConsumer();
  $scope.consumer_key = consumer.key;
  $scope.consumer_secret = consumer.secret;

  $scope.$watch('hostname', function(newVal, oldVal, scope) {
    console.log('Watching happily: ', newVal, oldVal, scope);
    if (newVal !== oldVal) {
      WCSettings.setHost(newVal);
    }
  });

  $scope.$watch('consumer_key', function(newVal, oldVal) {
    if (newVal !== oldVal) {
      WCSettings.setConsumer(newVal, $scope.consumer_secret);
    }
  });
  $scope.$watch('consumer_secret', function(newVal, oldVal) {
    if (newVal !== oldVal) {
      WCSettings.setConsumer($scope.consumer_key, newVal);
    }
  });

}]);