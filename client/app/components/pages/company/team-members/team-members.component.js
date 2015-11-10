import template from './team-members.html';
import controller from './team-members.controller';
import './team-members.styl';

let teamMembersComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default teamMembersComponent;
