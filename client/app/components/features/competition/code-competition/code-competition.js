import angular from 'angular';
import uiRouter from 'angular-ui-router';
import codeCompetitionComponent from './code-competition.component';

let codeCompetitionModule = angular.module('code-competition', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('code-competition', {
      url: '/code-competition',
      template: '<code-competition></code-competition>'
    });
})

.directive('codeCompetition', codeCompetitionComponent);

export default codeCompetitionModule;