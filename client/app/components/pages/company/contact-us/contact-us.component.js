import template from './contact-us.html';
import controller from './contact-us.controller';
import './contact-us.styl';

let contactUsComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default contactUsComponent;
