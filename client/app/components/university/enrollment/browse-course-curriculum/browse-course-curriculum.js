import angular from 'angular';
import uiRouter from 'angular-ui-router';
import browseCourseCurriculumComponent from './browse-course-curriculum.component';

let browseCourseCurriculumModule = angular.module('browse-course-curriculum', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('browse-course-curriculum', {
      url: '/browse-course-curriculum',
      template: '<browse-course-curriculum></browse-course-curriculum>'
    });
})

.directive('browseCourseCurriculum', browseCourseCurriculumComponent);

export default browseCourseCurriculumModule;