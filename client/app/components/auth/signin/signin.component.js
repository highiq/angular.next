import template from './signin.html';
import controller from './signin.controller';
import './signin.styl';

let signinComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default signinComponent;
