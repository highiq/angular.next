import angular from 'angular';
import uiRouter from 'angular-ui-router';
import companyNewsComponent from './company-news.component';

let companyNewsModule = angular.module('company-news', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('company-news', {
      url: '/company-news',
      template: '<company-news></company-news>'
    });
})

.directive('companyNews', companyNewsComponent);

export default companyNewsModule;