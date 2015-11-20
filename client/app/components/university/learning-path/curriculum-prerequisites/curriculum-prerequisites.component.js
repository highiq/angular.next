import template from './curriculum-prerequisites.html';
import controller from './curriculum-prerequisites.controller';
import './curriculum-prerequisites.styl';

let curriculumPrerequisitesComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default curriculumPrerequisitesComponent;
