import angular from 'angular';
import uiRouter from 'angular-ui-router';
import myBookmarksComponent from './my-bookmarks.component';

let myBookmarksModule = angular.module('my-bookmarks', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('my-bookmarks', {
      url: '/my-bookmarks',
      template: '<my-bookmarks></my-bookmarks>'
    });
})

.directive('myBookmarks', myBookmarksComponent);

export default myBookmarksModule;