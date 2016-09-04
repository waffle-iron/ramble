'use strict';

require('./_entry-list-item.scss');

const angular = require('angular');
const ramble = angular.module('ramble');

ramble.component('rambleEntryListItem', {
  bindings: {
    'entry':'='
  },
  template: require('./entry-list-item.html')
});
