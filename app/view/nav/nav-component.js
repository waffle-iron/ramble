'use strict';

const angular = require('angular');
const ramble = angular.module('ramble');

ramble.component('navBar', {
  template: require('./nav.html')
});
