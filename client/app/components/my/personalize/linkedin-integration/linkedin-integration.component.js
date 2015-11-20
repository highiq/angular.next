import template from './linkedin-integration.html';
import controller from './linkedin-integration.controller';
import './linkedin-integration.styl';

let linkedinIntegrationComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default linkedinIntegrationComponent;
