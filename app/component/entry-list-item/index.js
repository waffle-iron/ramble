'use strict';

require('./_entry-list-item.scss');

const angular = require('angular');
const ramble = angular.module('ramble');

ramble.component('rambleEntryListItem', {
  bindings: {
    entry:'='
  },
  template: require('./entry-list-item.html'),
  controller: 'EntryListItemController'
});

ramble.controller('EntryListItemController', [EntryListItemController]);

function EntryListItemController() {
  this.bodyPreview = null;

  if (this.entry.body.length > 75) {
    this.bodyPreview = this.entry.body.slice(0, 74) + '...';
  } else {
    this.bodyPreview = this.entry.body;
  }
}
