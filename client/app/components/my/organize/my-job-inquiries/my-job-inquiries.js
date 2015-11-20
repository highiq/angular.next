import angular from 'angular';
import uiRouter from 'angular-ui-router';
import myJobInquiriesComponent from './my-job-inquiries.component';

let myJobInquiriesModule = angular.module('my-job-inquiries', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('my-job-inquiries', {
      url: '/my-job-inquiries',
      template: '<my-job-inquiries></my-job-inquiries>'
    });
})

.directive('myJobInquiries', myJobInquiriesComponent);

export default myJobInquiriesModule;