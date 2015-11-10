import template from './forgot-password.html';
import controller from './forgot-password.controller';
import './forgot-password.styl';

let forgotPasswordComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default forgotPasswordComponent;
