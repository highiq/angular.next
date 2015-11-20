import angular from 'angular';
import uiRouter from 'angular-ui-router';
import linkedInIntegrationComponent from './linked-in-integration.component';

let linkedInIntegrationModule = angular.module('linked-in-integration', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('linked-in-integration', {
      url: '/linked-in-integration',
      template: '<linked-in-integration></linked-in-integration>'
    });
})

.directive('linkedInIntegration', linkedInIntegrationComponent);

export default linkedInIntegrationModule;