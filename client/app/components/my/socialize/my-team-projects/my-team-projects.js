import angular from 'angular';
import uiRouter from 'angular-ui-router';
import myTeamProjectsComponent from './my-team-projects.component';

let myTeamProjectsModule = angular.module('my-team-projects', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('my-team-projects', {
      url: '/my-team-projects',
      template: '<my-team-projects></my-team-projects>'
    });
})

.directive('myTeamProjects', myTeamProjectsComponent);

export default myTeamProjectsModule;