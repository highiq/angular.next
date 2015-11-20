import angular from 'angular';
import uiRouter from 'angular-ui-router';
import itBooksComponent from './it-books.component';

let itBooksModule = angular.module('it-books', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('it-books', {
      url: '/it-books',
      template: '<it-books></it-books>'
    });
})

.directive('itBooks', itBooksComponent);

export default itBooksModule;