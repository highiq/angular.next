import angular from 'angular';
import uiRouter from 'angular-ui-router';
import onlineItTrainingComponent from './online-it-training.component';

let onlineItTrainingModule = angular.module('online-it-training', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('online-it-training', {
      url: '/online-it-training',
      template: '<online-it-training></online-it-training>'
    });
})

.directive('onlineItTraining', onlineItTrainingComponent);

export default onlineItTrainingModule;