import angular from 'angular';
import uiRouter from 'angular-ui-router';
import teamMembersComponent from './team-members.component';

let teamMembersModule = angular.module('team-members', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('team-members', {
      url: '/team-members',
      template: '<team-members></team-members>'
    });
})

.directive('teamMembers', teamMembersComponent);

export default teamMembersModule;