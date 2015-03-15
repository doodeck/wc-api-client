// remoteapi-service.js


'use strict';

angular.module('myApp.remoteapi', [])
.factory('remoteAPI', ['$http', 'WCSettings', 'MyConfig',
               function($http,   WCSettings,   MyConfig) {
  // var hostname = undefined;
  return {
    getWSDL: function() {
      var hostname = WCSettings.getHost();
      return $http({method: 'JSONP', url: MyConfig.protocol + hostname + '/wc-api/v2?_jsonp=JSON_CALLBACK'});
    }
  }
}])
.config(function($httpProvider) { // nice: http://stackoverflow.com/questions/25400891/how-to-custom-set-angularjs-jsonp-callback-name
  $httpProvider.interceptors.push('jsonpInterceptor');
})
.factory('jsonpInterceptor', function($timeout, $window) {
  return {
    'request': function(config) {
      if (config.method === 'JSONP') {
        var callbackId = angular.callbacks.counter.toString(36);
        config.callbackName = 'angular_callbacks_' + callbackId;
        config.url = config.url.replace('JSON_CALLBACK', config.callbackName);

        $timeout(function() {
          $window[config.callbackName] = angular.callbacks['_' + callbackId];
        }, 0, false);
      }

      return config;
    },

    'response': function(response) {
      var config = response.config;
      if (config.method === 'JSONP') {
        delete $window[config.callbackName]; // cleanup
      }

      return response;
    },

    'responseError': function(rejection) {
      var config = rejection.config;
      if (config.method === 'JSONP') {
        delete $window[config.callbackName]; // cleanup
      }

      return $q.reject(rejection);
    }
  };
});
