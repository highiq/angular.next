import angular from 'angular';
import uiRouter from 'angular-ui-router';
import jobBoardComponent from './job-board.component';

let jobBoardModule = angular.module('job-board', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('job-board', {
      url: '/job-board',
      template: '<job-board></job-board>'
    });
})

.directive('jobBoard', jobBoardComponent);

export default jobBoardModule;