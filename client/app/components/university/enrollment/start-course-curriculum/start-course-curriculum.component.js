import template from './start-course-curriculum.html';
import controller from './start-course-curriculum.controller';
import './start-course-curriculum.styl';

let startCourseCurriculumComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default startCourseCurriculumComponent;
