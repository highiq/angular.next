import angular from 'angular';
import uiRouter from 'angular-ui-router';
import lessonLearningObjectivesComponent from './lesson-learning-objectives.component';

let lessonLearningObjectivesModule = angular.module('lesson-learning-objectives', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('lesson-learning-objectives', {
      url: '/lesson-learning-objectives',
      template: '<lesson-learning-objectives></lesson-learning-objectives>'
    });
})

.directive('lessonLearningObjectives', lessonLearningObjectivesComponent);

export default lessonLearningObjectivesModule;