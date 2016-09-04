'use strict';

require('./_nav.scss');

const angular = require('angular');
const ramble = angular.module('ramble');

ramble.component('rambleNavBar', {
  template: require('./nav.html')
});
