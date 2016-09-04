'use strict';

require('./_lrg-entry.scss');

const angular = require('angular');
const ramble = angular.module('ramble');

ramble.component('rambleLrgEntry', {
  bindings: {
    'entry':'='
  },
  template: require('./lrg-entry.html')
});
