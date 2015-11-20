import angular from 'angular';
import uiRouter from 'angular-ui-router';
import githubIntegrationComponent from './github-integration.component';

let githubIntegrationModule = angular.module('github-integration', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('github-integration', {
      url: '/github-integration',
      template: '<github-integration></github-integration>'
    });
})

.directive('githubIntegration', githubIntegrationComponent);

export default githubIntegrationModule;