import angular from 'angular';
import uiRouter from 'angular-ui-router';
import courseLessonPlanComponent from './course-lesson-plan.component';

let courseLessonPlanModule = angular.module('course-lesson-plan', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('course-lesson-plan', {
      url: '/course-lesson-plan',
      template: '<course-lesson-plan></course-lesson-plan>'
    });
})

.directive('courseLessonPlan', courseLessonPlanComponent);

export default courseLessonPlanModule;