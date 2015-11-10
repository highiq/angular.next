import angular from 'angular';
import uiRouter from 'angular-ui-router';
import altHeroComponent from './alt-hero.component';

let altHeroModule = angular.module('alt-hero', [
  uiRouter
])

.directive('althero', altHeroComponent);

export default altHeroModule;