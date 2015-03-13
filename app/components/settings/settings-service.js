// settings-service.js

'use strict';

angular.module('myApp.settings', [])
.factory('WCSettings', [ '$cacheFactory', function($cacheFactory) {
  var settingsCache = $cacheFactory('wcsettings');
  var hostId = 'hostId';
  return {
    setHost: function(host) {
      settingsCache.put(hostId, host);
    },
    getHost: function() {
      var host = settingsCache.get(hostId);
      if (!host) {
        return "http://localhost";
      } else {
        return host;
      }
    }
  }
}]);
