import template from './best-lesson-plan.html';
import controller from './best-lesson-plan.controller';
import './best-lesson-plan.styl';

let bestLessonPlanComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default bestLessonPlanComponent;
