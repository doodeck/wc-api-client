// settings-service.js

'use strict';

angular.module('myApp.settings', ['ngCookies'])
.factory('WCSettings', [ '$cacheFactory', '$cookies', function($cacheFactory, $cookies) {
  var settingsCache = $cacheFactory('wcsettings');
  var hostId = 'hostId';
  var cookieName = 'wc-cookie';
  return {
    setHost: function(host) {
      settingsCache.put(hostId, host);
      // console.log('Setting cookie: ', host);
      $cookies.put(cookieName, host);
    },
    getHost: function() {
      var host = settingsCache.get(hostId);
      if (!host) {
        return $cookies.get(cookieName) || "http://localhost";
      } else {
        return host;
      }
    }
  }
}]);
