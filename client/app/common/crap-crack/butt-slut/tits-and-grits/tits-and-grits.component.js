import template from './tits-and-grits.html';
import controller from './tits-and-grits.controller';
import './tits-and-grits.styl';

let titsAndGritsComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default titsAndGritsComponent;
