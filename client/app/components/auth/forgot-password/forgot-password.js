import angular from 'angular';
import uiRouter from 'angular-ui-router';
import forgotPasswordComponent from './forgot-password.component';

let forgotPasswordModule = angular.module('forgot-password', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('forgot-password', {
      url: '/forgot-password',
      template: '<forgot-password></forgot-password>'
    });
})

.directive('forgotPassword', forgotPasswordComponent);

export default forgotPasswordModule;
