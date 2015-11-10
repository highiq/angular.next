import angular from 'angular';
import uiRouter from 'angular-ui-router';
import browseJobsComponent from './browse-jobs.component';

let browseJobsModule = angular.module('browse-jobs', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('browse-jobs', {
      url: '/browse-jobs',
      template: '<browse-jobs></browse-jobs>'
    });
})

.directive('browseJobs', browseJobsComponent);

export default browseJobsModule;