'use strict';
require('./dashboard.scss');

const angular = require('angular');
const ramble = angular.module('ramble');

ramble.controller('DashboardController', ['$log', '$location', 'rambleService', DashboardController]);
function DashboardController(rambleService){
  rambleService.fetchEntries()
  .then((posts)=>{
    this.posts = posts;
  })
  .catch(()=>{
    alert('it failed!!!');
  });
}

ramble.component('createPostListForm', {
  bindings: {
    posts:'='
  },
  template: require('./dashboard.html'),
  controller: function DashboardController(){}
});
