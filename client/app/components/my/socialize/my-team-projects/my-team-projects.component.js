import template from './my-team-projects.html';
import controller from './my-team-projects.controller';
import './my-team-projects.styl';

let myTeamProjectsComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default myTeamProjectsComponent;
