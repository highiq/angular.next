import angular from 'angular';
import uiRouter from 'angular-ui-router';
import faqComponent from './faq.component';

let faqModule = angular.module('faq', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('faq', {
      url: '/faq',
      template: '<faq></faq>'
    });
})

.directive('faq', faqComponent);

export default faqModule;