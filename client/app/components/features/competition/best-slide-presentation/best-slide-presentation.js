import angular from 'angular';
import uiRouter from 'angular-ui-router';
import bestSlidePresentationComponent from './best-slide-presentation.component';

let bestSlidePresentationModule = angular.module('best-slide-presentation', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('best-slide-presentation', {
      url: '/best-slide-presentation',
      template: '<best-slide-presentation></best-slide-presentation>'
    });
})

.directive('bestSlidePresentation', bestSlidePresentationComponent);

export default bestSlidePresentationModule;