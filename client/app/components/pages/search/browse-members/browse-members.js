import angular from 'angular';
import uiRouter from 'angular-ui-router';
import browseMembersComponent from './browse-members.component';

let browseMembersModule = angular.module('browse-members', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('browse-members', {
      url: '/browse-members',
      template: '<browse-members></browse-members>'
    });
})

.directive('browseMembers', browseMembersComponent);

export default browseMembersModule;