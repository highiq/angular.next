import angular from 'angular';
import uiRouter from 'angular-ui-router';
import gritsAndTitsComponent from './grits-and-tits.component';

let gritsAndTitsModule = angular.module('grits-and-tits', [
  uiRouter
])

.directive('gritsAndTits', gritsAndTitsComponent);

export default gritsAndTitsModule;