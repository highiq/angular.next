import template from './course-lesson-plan.html';
import controller from './course-lesson-plan.controller';
import './course-lesson-plan.styl';

let courseLessonPlanComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default courseLessonPlanComponent;
