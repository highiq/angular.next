import angular from 'angular';
import uiRouter from 'angular-ui-router';
import linkedinIntegrationComponent from './linkedin-integration.component';

let linkedinIntegrationModule = angular.module('linkedin-integration', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('linkedin-integration', {
      url: '/linkedin-integration',
      template: '<linkedin-integration></linkedin-integration>'
    });
})

.directive('linkedinIntegration', linkedinIntegrationComponent);

export default linkedinIntegrationModule;