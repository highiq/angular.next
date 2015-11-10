import template from './about-us.html';
import controller from './about-us.controller';
import './about-us.styl';

let aboutUsComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default aboutUsComponent;
