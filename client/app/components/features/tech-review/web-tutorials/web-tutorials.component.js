import template from './web-tutorials.html';
import controller from './web-tutorials.controller';
import './web-tutorials.styl';

let webTutorialsComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default webTutorialsComponent;
