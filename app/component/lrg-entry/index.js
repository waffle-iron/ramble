'use strict';

require('./_lrg-entry.scss');

const angular = require('angular');
const ramble = angular.module('ramble');

ramble.component('rambleLrgEntry', {
  bindings: {
    'entry':'='
  },
  template: require('./lrg-entry.html'),
  controller: 'LrgEntryController',
  controllerAs: 'LrgEntryCtrl'
});

ramble.controller('LrgEntryController', ['$q', '$log', '$location', '$routeParams', 'rambleService',  LrgEntryController]);

function LrgEntryController($q, $log, $location, $routeParams, rambleService) {
  this.entry = null;
  this.entryId = $routeParams;
  this.getEntry = function(entryId) {
    $log.info('getting entry', entryId);
    rambleService.getEntry(entryId)
    .then(entry => {
      this.entry = entry;
    })
    .catch(err => $log.error(err));
  };
}
