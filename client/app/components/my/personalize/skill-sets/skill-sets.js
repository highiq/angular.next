import angular from 'angular';
import uiRouter from 'angular-ui-router';
import skillSetsComponent from './skill-sets.component';

let skillSetsModule = angular.module('skill-sets', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('skill-sets', {
      url: '/skill-sets',
      template: '<skill-sets></skill-sets>'
    });
})

.directive('skillSets', skillSetsComponent);

export default skillSetsModule;