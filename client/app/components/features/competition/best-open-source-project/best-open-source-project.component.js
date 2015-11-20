import template from './best-open-source-project.html';
import controller from './best-open-source-project.controller';
import './best-open-source-project.styl';

let bestOpenSourceProjectComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default bestOpenSourceProjectComponent;
