// directive.js

angular.module('myApp.view3.directives', [])
.directive('tableDirective', function() {
  return {
    // require: 'ngModel',
    templateUrl: 'view3/table.html'
  };
});
