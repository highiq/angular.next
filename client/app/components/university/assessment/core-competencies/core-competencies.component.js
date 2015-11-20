import template from './core-competencies.html';
import controller from './core-competencies.controller';
import './core-competencies.styl';

let coreCompetenciesComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default coreCompetenciesComponent;
