import angular from 'angular';
import uiRouter from 'angular-ui-router';
import webTutorialsComponent from './web-tutorials.component';

let webTutorialsModule = angular.module('web-tutorials', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('web-tutorials', {
      url: '/web-tutorials',
      template: '<web-tutorials></web-tutorials>'
    });
})

.directive('webTutorials', webTutorialsComponent);

export default webTutorialsModule;