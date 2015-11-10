import angular from 'angular';
import uiRouter from 'angular-ui-router';
import tourComponent from './tour.component';

let tourModule = angular.module('tour', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('tour', {
      url: '/tour',
      template: '<tour></tour>'
    });
})

.directive('tour', tourComponent);

export default tourModule;