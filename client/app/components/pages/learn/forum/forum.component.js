import template from './forum.html';
import controller from './forum.controller';
import './forum.styl';

let forumComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default forumComponent;
