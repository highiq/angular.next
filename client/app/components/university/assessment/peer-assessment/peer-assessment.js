import angular from 'angular';
import uiRouter from 'angular-ui-router';
import peerAssessmentComponent from './peer-assessment.component';

let peerAssessmentModule = angular.module('peer-assessment', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('peer-assessment', {
      url: '/peer-assessment',
      template: '<peer-assessment></peer-assessment>'
    });
})

.directive('peerAssessment', peerAssessmentComponent);

export default peerAssessmentModule;