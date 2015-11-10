import angular from 'angular';
import uiRouter from 'angular-ui-router';
import titsAndGritsComponent from './tits-and-grits.component';

let titsAndGritsModule = angular.module('tits-and-grits', [
  uiRouter
])

.directive('titsAndGrits', titsAndGritsComponent);

export default titsAndGritsModule;