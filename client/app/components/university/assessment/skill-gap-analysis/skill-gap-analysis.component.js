import template from './skill-gap-analysis.html';
import controller from './skill-gap-analysis.controller';
import './skill-gap-analysis.styl';

let skillGapAnalysisComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default skillGapAnalysisComponent;
