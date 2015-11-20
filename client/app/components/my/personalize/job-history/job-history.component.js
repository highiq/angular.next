import template from './job-history.html';
import controller from './job-history.controller';
import './job-history.styl';

let jobHistoryComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default jobHistoryComponent;
