import angular from 'angular';
import uiRouter from 'angular-ui-router';
import bestOpenSourceProjectComponent from './best-open-source-project.component';

let bestOpenSourceProjectModule = angular.module('best-open-source-project', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('best-open-source-project', {
      url: '/best-open-source-project',
      template: '<best-open-source-project></best-open-source-project>'
    });
})

.directive('bestOpenSourceProject', bestOpenSourceProjectComponent);

export default bestOpenSourceProjectModule;