import angular from 'angular';
import uiRouter from 'angular-ui-router';
import openSourceFrameworkComponent from './open-source-framework.component';

let openSourceFrameworkModule = angular.module('open-source-framework', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('open-source-framework', {
      url: '/open-source-framework',
      template: '<open-source-framework></open-source-framework>'
    });
})

.directive('openSourceFramework', openSourceFrameworkComponent);

export default openSourceFrameworkModule;