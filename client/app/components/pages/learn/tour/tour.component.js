import template from './tour.html';
import controller from './tour.controller';
import './tour.styl';

let tourComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default tourComponent;
