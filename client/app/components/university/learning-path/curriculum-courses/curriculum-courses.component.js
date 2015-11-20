import template from './curriculum-courses.html';
import controller from './curriculum-courses.controller';
import './curriculum-courses.styl';

let curriculumCoursesComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default curriculumCoursesComponent;
