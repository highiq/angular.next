import angular from 'angular';
import uiRouter from 'angular-ui-router';
import courseLessonPathComponent from './course-lesson-path.component';

let courseLessonPathModule = angular.module('course-lesson-path', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('course-lesson-path', {
      url: '/course-lesson-path',
      template: '<course-lesson-path></course-lesson-path>'
    });
})

.directive('courseLessonPath', courseLessonPathComponent);

export default courseLessonPathModule;