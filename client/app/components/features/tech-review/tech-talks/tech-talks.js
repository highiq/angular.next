import angular from 'angular';
import uiRouter from 'angular-ui-router';
import techTalksComponent from './tech-talks.component';

let techTalksModule = angular.module('tech-talks', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('tech-talks', {
      url: '/tech-talks',
      template: '<tech-talks></tech-talks>'
    });
})

.directive('techTalks', techTalksComponent);

export default techTalksModule;