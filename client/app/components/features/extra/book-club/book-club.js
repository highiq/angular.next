import angular from 'angular';
import uiRouter from 'angular-ui-router';
import bookClubComponent from './book-club.component';

let bookClubModule = angular.module('book-club', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('book-club', {
      url: '/book-club',
      template: '<book-club></book-club>'
    });
})

.directive('bookClub', bookClubComponent);

export default bookClubModule;