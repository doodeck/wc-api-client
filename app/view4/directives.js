// directive.js

angular.module('myApp.view4.directives', [])
.directive('tableGlobalDirective', function() {
  return {
    // require: 'ngModel',
    restrict: 'E',
    templateUrl: 'view4/table.html'
  };
})
.directive('ngEnter', function() {
    return function(scope, element, attrs) {
        element.bind("keydown keypress", function(event) {
            if(event.which === 13) {
                scope.$apply(function(){
                    scope.$eval(attrs.ngEnter, {'event': event});
                });

                event.preventDefault();
            }
        });
    };
});
