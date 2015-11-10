import template from './grits-and-tits.html';
import controller from './grits-and-tits.controller';
import './grits-and-tits.styl';

let gritsAndTitsComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default gritsAndTitsComponent;
