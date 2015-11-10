import angular from 'angular';
import uiRouter from 'angular-ui-router';
import openSourceLibraryComponent from './open-source-library.component';

let openSourceLibraryModule = angular.module('open-source-library', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('open-source-library', {
      url: '/open-source-library',
      template: '<open-source-library></open-source-library>'
    });
})

.directive('openSourceLibrary', openSourceLibraryComponent);

export default openSourceLibraryModule;