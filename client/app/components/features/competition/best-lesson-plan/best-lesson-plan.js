import angular from 'angular';
import uiRouter from 'angular-ui-router';
import bestLessonPlanComponent from './best-lesson-plan.component';

let bestLessonPlanModule = angular.module('best-lesson-plan', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('best-lesson-plan', {
      url: '/best-lesson-plan',
      template: '<best-lesson-plan></best-lesson-plan>'
    });
})

.directive('bestLessonPlan', bestLessonPlanComponent);

export default bestLessonPlanModule;