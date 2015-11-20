import angular from 'angular';
import uiRouter from 'angular-ui-router';
import startCourseCurriculumComponent from './start-course-curriculum.component';

let startCourseCurriculumModule = angular.module('start-course-curriculum', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('start-course-curriculum', {
      url: '/start-course-curriculum',
      template: '<start-course-curriculum></start-course-curriculum>'
    });
})

.directive('startCourseCurriculum', startCourseCurriculumComponent);

export default startCourseCurriculumModule;