import template from './self-assessment.html';
import controller from './self-assessment.controller';
import './self-assessment.styl';

let selfAssessmentComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default selfAssessmentComponent;
