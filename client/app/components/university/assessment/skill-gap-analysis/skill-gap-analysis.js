import angular from 'angular';
import uiRouter from 'angular-ui-router';
import skillGapAnalysisComponent from './skill-gap-analysis.component';

let skillGapAnalysisModule = angular.module('skill-gap-analysis', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('skill-gap-analysis', {
      url: '/skill-gap-analysis',
      template: '<skill-gap-analysis></skill-gap-analysis>'
    });
})

.directive('skillGapAnalysis', skillGapAnalysisComponent);

export default skillGapAnalysisModule;