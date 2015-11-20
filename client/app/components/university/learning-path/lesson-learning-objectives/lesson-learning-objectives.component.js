import template from './lesson-learning-objectives.html';
import controller from './lesson-learning-objectives.controller';
import './lesson-learning-objectives.styl';

let lessonLearningObjectivesComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default lessonLearningObjectivesComponent;
