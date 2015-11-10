import angular from 'angular';
import uiRouter from 'angular-ui-router';
import forumComponent from './forum.component';

let forumModule = angular.module('forum', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('forum', {
      url: '/forum',
      template: '<forum></forum>'
    });
})

.directive('forum', forumComponent);

export default forumModule;