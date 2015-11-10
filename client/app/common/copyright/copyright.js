import angular from 'angular';
import uiRouter from 'angular-ui-router';
import copyrightComponent from './copyright.component';

let copyrightModule = angular.module('copyright', [
  uiRouter
])

.directive('copyright', copyrightComponent);

export default copyrightModule;
