import angular from 'angular';
import uiRouter from 'angular-ui-router';
import myCodeRepositoriesComponent from './my-code-repositories.component';

let myCodeRepositoriesModule = angular.module('my-code-repositories', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('my-code-repositories', {
      url: '/my-code-repositories',
      template: '<my-code-repositories></my-code-repositories>'
    });
})

.directive('myCodeRepositories', myCodeRepositoriesComponent);

export default myCodeRepositoriesModule;