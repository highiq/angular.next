import template from './talent-agency.html';
import controller from './talent-agency.controller';
import './talent-agency.styl';

let talentAgencyComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default talentAgencyComponent;
