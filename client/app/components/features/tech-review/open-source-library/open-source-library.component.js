import template from './open-source-library.html';
import controller from './open-source-library.controller';
import './open-source-library.styl';

let openSourceLibraryComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default openSourceLibraryComponent;
