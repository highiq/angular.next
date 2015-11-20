import template from './peer-assessment.html';
import controller from './peer-assessment.controller';
import './peer-assessment.styl';

let peerAssessmentComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default peerAssessmentComponent;
