import template from './github-integration.html';
import controller from './github-integration.controller';
import './github-integration.styl';

let githubIntegrationComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default githubIntegrationComponent;
