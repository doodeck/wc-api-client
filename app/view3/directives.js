// directive.js

angular.module('myApp.view3.directives', [])
.directive('tableDirective', function() {
  return {
    // require: 'ngModel',
    templateUrl: 'view3/table.html'
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
