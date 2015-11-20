import angular from 'angular';
import uiRouter from 'angular-ui-router';
import curriculumCoursesComponent from './curriculum-courses.component';

let curriculumCoursesModule = angular.module('curriculum-courses', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('curriculum-courses', {
      url: '/curriculum-courses',
      template: '<curriculum-courses></curriculum-courses>'
    });
})

.directive('curriculumCourses', curriculumCoursesComponent);

export default curriculumCoursesModule;