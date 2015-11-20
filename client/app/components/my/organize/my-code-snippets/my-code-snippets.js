import angular from 'angular';
import uiRouter from 'angular-ui-router';
import myCodeSnippetsComponent from './my-code-snippets.component';

let myCodeSnippetsModule = angular.module('my-code-snippets', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('my-code-snippets', {
      url: '/my-code-snippets',
      template: '<my-code-snippets></my-code-snippets>'
    });
})

.directive('myCodeSnippets', myCodeSnippetsComponent);

export default myCodeSnippetsModule;