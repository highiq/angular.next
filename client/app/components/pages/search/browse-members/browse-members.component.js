import template from './browse-members.html';
import controller from './browse-members.controller';
import './browse-members.styl';

let browseMembersComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default browseMembersComponent;
