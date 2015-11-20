import angular from 'angular';
import uiRouter from 'angular-ui-router';
import bestWebTutorialComponent from './best-web-tutorial.component';

let bestWebTutorialModule = angular.module('best-web-tutorial', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('best-web-tutorial', {
      url: '/best-web-tutorial',
      template: '<best-web-tutorial></best-web-tutorial>'
    });
})

.directive('bestWebTutorial', bestWebTutorialComponent);

export default bestWebTutorialModule;