import angular from 'angular';
import uiRouter from 'angular-ui-router';
import courseLessonsComponent from './course-lessons.component';

let courseLessonsModule = angular.module('course-lessons', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('course-lessons', {
      url: '/course-lessons',
      template: '<course-lessons></course-lessons>'
    });
})

.directive('courseLessons', courseLessonsComponent);

export default courseLessonsModule;