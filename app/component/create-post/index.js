'use strict';

require('./_create-post.scss');

const angular = require('angular');
const ramble = angular.module('ramble');

ramble.component('rambleCreatePost', {
  template: require('./create-post.html'),
  controller: 'NewPostController',
  controllerAs: 'newPostCtrl'
});

ramble.controller('NewPostController', ['$log', '$location', 'authService', 'rambleService', NewPostController]);

function NewPostController($log, $location, authService, rambleService) {
  this.log = function() {
    $log.info('logging something test');
  };

  this.createEntry = function() {
    $log.info('creating post', this.post);
    rambleService.createEntry(this.post);
  };
}
