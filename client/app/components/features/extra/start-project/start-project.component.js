import template from './start-project.html';
import controller from './start-project.controller';
import './start-project.styl';

let startProjectComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default startProjectComponent;
