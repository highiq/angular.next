import angular from 'angular';
import uiRouter from 'angular-ui-router';
import contactUsComponent from './contact-us.component';

let contactUsModule = angular.module('contact-us', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('contact-us', {
      url: '/contact-us',
      template: '<contact-us></contact-us>'
    });
})

.directive('contactUs', contactUsComponent);

export default contactUsModule;
