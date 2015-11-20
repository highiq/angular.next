import template from './course-lesson-path.html';
import controller from './course-lesson-path.controller';
import './course-lesson-path.styl';

let courseLessonPathComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default courseLessonPathComponent;
