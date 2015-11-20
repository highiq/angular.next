import angular from 'angular';
import uiRouter from 'angular-ui-router';
import curriculumEnrollmentComponent from './curriculum-enrollment.component';

let curriculumEnrollmentModule = angular.module('curriculum-enrollment', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('curriculum-enrollment', {
      url: '/curriculum-enrollment',
      template: '<curriculum-enrollment></curriculum-enrollment>'
    });
})

.directive('curriculumEnrollment', curriculumEnrollmentComponent);

export default curriculumEnrollmentModule;