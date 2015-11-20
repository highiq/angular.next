import template from './code-competition.html';
import controller from './code-competition.controller';
import './code-competition.styl';

let codeCompetitionComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default codeCompetitionComponent;
