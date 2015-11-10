import angular from 'angular';
import uiRouter from 'angular-ui-router';
import newsletterComponent from './newsletter.component';

let newsletterModule = angular.module('newsletter', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('newsletter', {
      url: '/newsletter',
      template: '<newsletter></newsletter>'
    });
})

.directive('newsletter', newsletterComponent);

export default newsletterModule;