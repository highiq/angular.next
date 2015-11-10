import template from './browse-jobs.html';
import controller from './browse-jobs.controller';
import './browse-jobs.styl';

let browseJobsComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default browseJobsComponent;
