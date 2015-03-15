// remoteapi-service.js


'use strict';

angular.module('myApp.remoteapi.service', [])
.factory('remoteAPI', ['$http', 'WCSettings', 'MyConfig', 'useJSONP',
               function($http,   WCSettings,   MyConfig,   useJSONP) {
  // var hostname = undefined;
  var _procureURL = function(route, authenticate) {
    var hostname = WCSettings.getHost();
    var params = [];
    if (useJSONP) {
      params.push('_jsonp=JSON_CALLBACK');
    }
    if (authenticate) { // currently it only works for https protocol
      var consumer = WCSettings.getConsumer();

      params.push('consumer_key=' + consumer.key);
      params.push('consumer_secret=' + consumer.secret);
    }
    var paramsStr = '';
    var separator = '?';
    for (var par in params) {
      paramsStr += separator + params[par];
      separator = '&';
    }
    return MyConfig.protocol + '://' + hostname + '/wc-api/v2' + route + paramsStr;
  };

  return {
    getWSDL: function() {
      return $http({
        method: useJSONP ? 'JSONP' : 'GET',
        url: _procureURL('/', false)
      });
    },
    getProducts: function() {
      return $http({
        method: useJSONP ? 'JSONP' : 'GET',
        url: _procureURL('/products', true)
      });      
    }
  }
}])
// The rest is workaround for JSONP:
// http://stackoverflow.com/questions/25400891/how-to-custom-set-angularjs-jsonp-callback-name
.config(function($httpProvider) {
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
