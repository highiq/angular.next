import template from './skill-sets.html';
import controller from './skill-sets.controller';
import './skill-sets.styl';

let skillSetsComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default skillSetsComponent;
