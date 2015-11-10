import angular from 'angular';
import uiRouter from 'angular-ui-router';
import codeRepositoryComponent from './code-repository.component';

let codeRepositoryModule = angular.module('code-repository', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('code-repository', {
      url: '/code-repository',
      template: '<code-repository></code-repository>'
    });
})

.directive('codeRepository', codeRepositoryComponent);

export default codeRepositoryModule;