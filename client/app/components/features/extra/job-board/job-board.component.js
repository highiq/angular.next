import template from './job-board.html';
import controller from './job-board.controller';
import './job-board.styl';

let jobBoardComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default jobBoardComponent;
