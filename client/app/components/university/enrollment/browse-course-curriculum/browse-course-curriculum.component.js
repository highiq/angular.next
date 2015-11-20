import template from './browse-course-curriculum.html';
import controller from './browse-course-curriculum.controller';
import './browse-course-curriculum.styl';

let browseCourseCurriculumComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default browseCourseCurriculumComponent;
