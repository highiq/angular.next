import angular from 'angular';
import uiRouter from 'angular-ui-router';
import customizeCurriculumComponent from './customize-curriculum.component';

let customizeCurriculumModule = angular.module('customize-curriculum', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('customize-curriculum', {
      url: '/customize-curriculum',
      template: '<customize-curriculum></customize-curriculum>'
    });
})

.directive('customizeCurriculum', customizeCurriculumComponent);

export default customizeCurriculumModule;