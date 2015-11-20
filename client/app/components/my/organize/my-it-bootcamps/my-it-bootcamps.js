import angular from 'angular';
import uiRouter from 'angular-ui-router';
import myItBootcampsComponent from './my-it-bootcamps.component';

let myItBootcampsModule = angular.module('my-it-bootcamps', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('my-it-bootcamps', {
      url: '/my-it-bootcamps',
      template: '<my-it-bootcamps></my-it-bootcamps>'
    });
})

.directive('myItBootcamps', myItBootcampsComponent);

export default myItBootcampsModule;