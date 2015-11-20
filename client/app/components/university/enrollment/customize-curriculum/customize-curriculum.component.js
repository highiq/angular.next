import template from './customize-curriculum.html';
import controller from './customize-curriculum.controller';
import './customize-curriculum.styl';

let customizeCurriculumComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default customizeCurriculumComponent;
