import template from './alt-hero.html';
import controller from './alt-hero.controller';
import './alt-hero.styl';

let altHeroComponent = function () {
  return {
    restrict: 'E',
    scope: {section : '='},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default altHeroComponent;
