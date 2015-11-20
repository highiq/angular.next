import angular from 'angular';
import uiRouter from 'angular-ui-router';
import jobHistoryComponent from './job-history.component';

let jobHistoryModule = angular.module('job-history', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('job-history', {
      url: '/job-history',
      template: '<job-history></job-history>'
    });
})

.directive('jobHistory', jobHistoryComponent);

export default jobHistoryModule;