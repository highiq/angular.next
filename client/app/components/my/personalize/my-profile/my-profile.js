import angular from 'angular';
import uiRouter from 'angular-ui-router';
import myProfileComponent from './my-profile.component';

let myProfileModule = angular.module('my-profile', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('my-profile', {
      url: '/my-profile',
      template: '<my-profile></my-profile>'
    });
})

.directive('myProfile', myProfileComponent);

export default myProfileModule;