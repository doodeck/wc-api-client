// settings-service.js

'use strict';

angular.module('myApp.settings', ['ngCookies'])
.factory('WCSettings', [ '$cacheFactory', '$cookies', function($cacheFactory, $cookies) {
  var settingsCache = $cacheFactory('wcsettings');
  var cookieHost = 'wc-cookie-host';
  var hostId = cookieHost;
  var cookieConsumer = 'wc-cookie-consumer';
  var consumerId = cookieConsumer;

  // cookie functions should facilitate migration to ng 1.4
  var _setCookie = function(cookie, value) {
    // ng till 1.3 $cookies[cookie] = value;
    $cookies.put(cookie, value);
  }
  var _getCookie = function(cookie) {
    // ng till 1.3 return $cookies[cookie];
    return $cookies.get(cookie);
  }

  return {
    setHost: function(host) {
      settingsCache.put(hostId, host);
      // console.log('Setting cookie: ', host);
      _setCookie(cookieHost, host);
    },
    getHost: function() {
      var host = settingsCache.get(hostId);
      if (!host) {
        return _getCookie(cookieHost) || "http://localhost";
      } else {
        return host;
      }
    },
    setConsumer: function(key, secret) {
      var consumer = { key: key, secret: secret};
      settingsCache.put(consumerId, consumer);
      _setCookie(cookieConsumer, JSON.stringify(consumer));
    },
    getConsumer: function() {
      var consumer = settingsCache.get(consumerId);
      if (!consumer) {
        try {
          consumer = JSON.parse(_getCookie(cookieConsumer));
        } catch(e) {
          console.log('parsing cookie failed but no worries: ', e);
          consumer = undefined;
        }
      }
      return consumer || { key: '', secret: ''};
    }
  }
}]);
