import template from './formal-assessment.html';
import controller from './formal-assessment.controller';
import './formal-assessment.styl';

let formalAssessmentComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default formalAssessmentComponent;
