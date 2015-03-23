'use strict';

angular.module('myApp.view3.controller', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', ['$scope',
                  function($scope) {
  $scope.tableContent = [
    {
      "name": "name1",
      "url": "http://url1",
      "count": 1,
      "price": 0.2
    },
    {
      "name": "name2",
      "url": "http://url2",
      "count": 5,
      "price": 0.45
    },
    {
      "name": "name3",
      "url": "http://url3",
      "count": 7,
      "price": 0.78
    }
  ];

  $scope.areaChange = function(index) {
    console.log('Area happily changed: ', index);
  }
}]);