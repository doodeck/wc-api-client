// directive.js

angular.module('myApp.view3.directive', [])
.directive('tableDirective', function() {
  return {
    // require: 'ngModel',
    templateUrl: 'view3/table.html'
  };
});
