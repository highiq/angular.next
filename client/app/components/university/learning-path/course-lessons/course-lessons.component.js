import template from './course-lessons.html';
import controller from './course-lessons.controller';
import './course-lessons.styl';

let courseLessonsComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default courseLessonsComponent;
