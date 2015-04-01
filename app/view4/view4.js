'use strict';

angular.module('myApp.view4.controller', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view4', {
    templateUrl: 'view4/view4.html',
    controller: 'View4Ctrl'
  });
}])

.controller('View4Ctrl', ['$scope',
                  function($scope) {
  $scope.options = [
    { label: 'one', value: 1 },
    { label: 'two', value: 2 }
  ];

  $scope.tableContent = {
    "main": [
      {
        "name": "name1",
        "url": "http://url1",
        "count": 1,
        "price": 0.2,
        "ratio": 0.3
      },
      {
        "name": "name2",
        "url": "http://url2",
        "count": 5,
        "price": 0.45,
        "ratio": 0.99
      },
      {
        "name": "name3",
        "url": "http://url3",
        "count": 7,
        "price": 0.78,
        "ratio": 0.5
      }
    ],
  "misc": [
      {
        "name": "mame1",
        "url": "http://murl1",
        "count": 1,
        "price": 0.2
      },
      {
        "name": "mame2",
        "url": "http://murl2",
        "count": 5,
        "price": 0.45
      },
      {
        "name": "mame3",
        "url": "http://murl3",
        "count": 7,
        "price": 0.78
      }
    ],
  "form": {
      "correctlySelected": $scope.options[1]
    }
  };

  $scope.countChanged = function (index, trow) {
    console.log('countChanged: ', index, trow);
    trow.area = trow.count * trow.ratio;
  }

  $scope.areaChanged = function(index, trow) {
    console.log('areaChanged: ', index, trow);
    trow.count = trow.area / trow.ratio;
  };

  $scope.areaChange = function(index) {
    console.log('Area happily changed: ', index);
  };

  $scope.enterPressed = function(index) {
    console.log('Enter happily enterPressed: [', index, ']: ', $scope.tableContent /*[index]*/);
  }

  $scope.sumTotalChanged = function() {
    console.log('sumTotalChanged!!!');
  }
}]);