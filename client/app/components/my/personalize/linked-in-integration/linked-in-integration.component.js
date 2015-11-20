import template from './linked-in-integration.html';
import controller from './linked-in-integration.controller';
import './linked-in-integration.styl';

let linkedInIntegrationComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default linkedInIntegrationComponent;
