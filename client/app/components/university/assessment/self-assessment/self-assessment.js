import angular from 'angular';
import uiRouter from 'angular-ui-router';
import selfAssessmentComponent from './self-assessment.component';

let selfAssessmentModule = angular.module('self-assessment', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('self-assessment', {
      url: '/self-assessment',
      template: '<self-assessment></self-assessment>'
    });
})

.directive('selfAssessment', selfAssessmentComponent);

export default selfAssessmentModule;