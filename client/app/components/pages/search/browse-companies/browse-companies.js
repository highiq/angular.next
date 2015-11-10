import angular from 'angular';
import uiRouter from 'angular-ui-router';
import browseCompaniesComponent from './browse-companies.component';

let browseCompaniesModule = angular.module('browse-companies', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('browse-companies', {
      url: '/browse-companies',
      template: '<browse-companies></browse-companies>'
    });
})

.directive('browseCompanies', browseCompaniesComponent);

export default browseCompaniesModule;