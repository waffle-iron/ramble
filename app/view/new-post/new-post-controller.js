'use strict';

const angular = require('angular');
const ramble = angular.module('ramble');

ramble.controller('NewPostController', ['$log', '$location', 'authService', 'rambleService', NewPostController]);

function NewPostController($log, $location, authService, rambleService) {
  this.log = function() {
    $log.info('logging something test');
  };
}
