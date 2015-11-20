import template from './course-learning-objectives.html';
import controller from './course-learning-objectives.controller';
import './course-learning-objectives.styl';

let courseLearningObjectivesComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default courseLearningObjectivesComponent;
