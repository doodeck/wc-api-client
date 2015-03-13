// remoteapi-service.js


'use strict';

angular.module('myApp.remoteapi', [])
.factory('remoteAPI', ['$http', function($http) {
  var hostname = undefined;
  return {
    setHost: function(host) {
      hostname = host;
    },
    getWSDL: function() {
      return $http.get(hostname + '/wc-api/v2');
    }
  }
}]);
