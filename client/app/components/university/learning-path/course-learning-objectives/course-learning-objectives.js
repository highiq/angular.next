import angular from 'angular';
import uiRouter from 'angular-ui-router';
import courseLearningObjectivesComponent from './course-learning-objectives.component';

let courseLearningObjectivesModule = angular.module('course-learning-objectives', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('course-learning-objectives', {
      url: '/course-learning-objectives',
      template: '<course-learning-objectives></course-learning-objectives>'
    });
})

.directive('courseLearningObjectives', courseLearningObjectivesComponent);

export default courseLearningObjectivesModule;