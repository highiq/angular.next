import angular from 'angular';
import uiRouter from 'angular-ui-router';
import myMessagesComponent from './my-messages.component';

let myMessagesModule = angular.module('my-messages', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('my-messages', {
      url: '/my-messages',
      template: '<my-messages></my-messages>'
    });
})

.directive('myMessages', myMessagesComponent);

export default myMessagesModule;