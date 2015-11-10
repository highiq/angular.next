import template from './copyright.html';
import controller from './copyright.controller';
import './copyright.styl';

let copyrightComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default copyrightComponent;
