'use strict';
require('./dashboard.scss');

const angular = require('angular');
const ramble = angular.module('ramble');

ramble.controller('DashboardController', ['$log', '$location', 'rambleService', DashboardController]);
function DashboardController($log, $location, rambleService){
  // rambleService.fetchEntries()
  // .then((posts)=>{
  //   this.posts = posts;
  // })
  // .catch(()=>{
  //   alert('it failed!!!');
  // });


    //TODO -- this code will be used to get stuff. Will eventually be removed.
  this.list = [];
  this.getEntries = function() {
    rambleService.fetchEntries()
      .then(entries => {
        console.log('entries', entries);
        this.list = entries;
      });
  };
}

// ramble.component('createPostListForm', {
//   bindings: {
//     posts:'='
//   },
//   template: require('./dashboard.html'),
//   controller: DashboardController,
//   controllerAs: 'dashCtrl'
// });
