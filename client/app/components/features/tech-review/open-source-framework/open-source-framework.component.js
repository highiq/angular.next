import template from './open-source-framework.html';
import controller from './open-source-framework.controller';
import './open-source-framework.styl';

let openSourceFrameworkComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default openSourceFrameworkComponent;
