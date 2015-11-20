import angular from 'angular';
import uiRouter from 'angular-ui-router';
import startProjectComponent from './start-project.component';

let startProjectModule = angular.module('start-project', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('start-project', {
      url: '/start-project',
      template: '<start-project></start-project>'
    });
})

.directive('startProject', startProjectComponent);

export default startProjectModule;