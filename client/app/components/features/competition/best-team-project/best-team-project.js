import angular from 'angular';
import uiRouter from 'angular-ui-router';
import bestTeamProjectComponent from './best-team-project.component';

let bestTeamProjectModule = angular.module('best-team-project', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('best-team-project', {
      url: '/best-team-project',
      template: '<best-team-project></best-team-project>'
    });
})

.directive('bestTeamProject', bestTeamProjectComponent);

export default bestTeamProjectModule;