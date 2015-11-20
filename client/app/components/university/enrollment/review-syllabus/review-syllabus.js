import angular from 'angular';
import uiRouter from 'angular-ui-router';
import reviewSyllabusComponent from './review-syllabus.component';

let reviewSyllabusModule = angular.module('review-syllabus', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('review-syllabus', {
      url: '/review-syllabus',
      template: '<review-syllabus></review-syllabus>'
    });
})

.directive('reviewSyllabus', reviewSyllabusComponent);

export default reviewSyllabusModule;