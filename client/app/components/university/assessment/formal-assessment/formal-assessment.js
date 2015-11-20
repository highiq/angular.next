import angular from 'angular';
import uiRouter from 'angular-ui-router';
import formalAssessmentComponent from './formal-assessment.component';

let formalAssessmentModule = angular.module('formal-assessment', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('formal-assessment', {
      url: '/formal-assessment',
      template: '<formal-assessment></formal-assessment>'
    });
})

.directive('formalAssessment', formalAssessmentComponent);

export default formalAssessmentModule;