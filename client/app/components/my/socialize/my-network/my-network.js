import angular from 'angular';
import uiRouter from 'angular-ui-router';
import myNetworkComponent from './my-network.component';

let myNetworkModule = angular.module('my-network', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('my-network', {
      url: '/my-network',
      template: '<my-network></my-network>'
    });
})

.directive('myNetwork', myNetworkComponent);

export default myNetworkModule;