import angular from 'angular';
import uiRouter from 'angular-ui-router';
import signinComponent from './signin.component';

let signinModule = angular.module('signin', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('signin', {
      url: '/signin',
      template: '<signin></signin>'
    });
})

.directive('signin', signinComponent);

export default signinModule;
