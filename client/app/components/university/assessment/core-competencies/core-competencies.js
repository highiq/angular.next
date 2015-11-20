import angular from 'angular';
import uiRouter from 'angular-ui-router';
import coreCompetenciesComponent from './core-competencies.component';

let coreCompetenciesModule = angular.module('core-competencies', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('core-competencies', {
      url: '/core-competencies',
      template: '<core-competencies></core-competencies>'
    });
})

.directive('coreCompetencies', coreCompetenciesComponent);

export default coreCompetenciesModule;