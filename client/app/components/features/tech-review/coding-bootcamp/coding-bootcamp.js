import angular from 'angular';
import uiRouter from 'angular-ui-router';
import codingBootcampComponent from './coding-bootcamp.component';

let codingBootcampModule = angular.module('coding-bootcamp', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('coding-bootcamp', {
      url: '/coding-bootcamp',
      template: '<coding-bootcamp></coding-bootcamp>'
    });
})

.directive('codingBootcamp', codingBootcampComponent);

export default codingBootcampModule;