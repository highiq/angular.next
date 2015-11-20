import angular from 'angular';
import uiRouter from 'angular-ui-router';
import curriculumPrerequisitesComponent from './curriculum-prerequisites.component';

let curriculumPrerequisitesModule = angular.module('curriculum-prerequisites', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('curriculum-prerequisites', {
      url: '/curriculum-prerequisites',
      template: '<curriculum-prerequisites></curriculum-prerequisites>'
    });
})

.directive('curriculumPrerequisites', curriculumPrerequisitesComponent);

export default curriculumPrerequisitesModule;