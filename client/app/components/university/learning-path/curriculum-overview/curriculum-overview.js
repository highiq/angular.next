import angular from 'angular';
import uiRouter from 'angular-ui-router';
import curriculumOverviewComponent from './curriculum-overview.component';

let curriculumOverviewModule = angular.module('curriculum-overview', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('curriculum-overview', {
      url: '/curriculum-overview',
      template: '<curriculum-overview></curriculum-overview>'
    });
})

.directive('curriculumOverview', curriculumOverviewComponent);

export default curriculumOverviewModule;