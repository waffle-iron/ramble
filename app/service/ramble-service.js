'use strict';

const angular = require('angular');
const ramble = angular.module('ramble');

ramble.factory('rambleService', ['$log', '$q', '$http', 'authService', rambleService]);

function rambleService($log, $q, $http, authService) {
  let service = {};
  let token = authService.getToken();
  let service.posts =[];
  service.fetchEntries = function() {
    if (!token) return $q.reject(new Error('no token -- not authorized'));
    let url = `${__API_URL__}/api/entries`;
    let config = {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    };

    return $http.get(url, config)
    .then(res => {
      $log.info('success -- entries ', res.data);
      return $q.resolve(res.data);
    })
    .catch(err => {
      $log.info('error -- entries ', err);
      return $q.reject(err);
    });
  };

  service.createEntry = function(entry) {
    if (!token) return $q.reject(new Error('no token -- not authorized'));
    let url = `${__API_URL__}/api/entry`;
    let config = {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    };

    return $http.post(url, entry, config)
    .then(res => {
      $log.info('success -- entries ', res.data);
      return $q.resolve(res.data);
    })
    .catch(err => {
      $log.info('error -- entries ', err);
      return $q.reject(err);
    });
  };

  return service;
}
