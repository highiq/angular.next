import template from './best-team-project.html';
import controller from './best-team-project.controller';
import './best-team-project.styl';

let bestTeamProjectComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default bestTeamProjectComponent;
