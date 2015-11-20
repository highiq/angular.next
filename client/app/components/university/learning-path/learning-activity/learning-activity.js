import angular from 'angular';
import uiRouter from 'angular-ui-router';
import learningActivityComponent from './learning-activity.component';

let learningActivityModule = angular.module('learning-activity', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('learning-activity', {
      url: '/learning-activity',
      template: '<learning-activity></learning-activity>'
    });
})

.directive('learningActivity', learningActivityComponent);

export default learningActivityModule;