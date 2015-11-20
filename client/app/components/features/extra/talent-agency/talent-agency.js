import angular from 'angular';
import uiRouter from 'angular-ui-router';
import talentAgencyComponent from './talent-agency.component';

let talentAgencyModule = angular.module('talent-agency', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('talent-agency', {
      url: '/talent-agency',
      template: '<talent-agency></talent-agency>'
    });
})

.directive('talentAgency', talentAgencyComponent);

export default talentAgencyModule;