import template from './curriculum-overview.html';
import controller from './curriculum-overview.controller';
import './curriculum-overview.styl';

let curriculumOverviewComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default curriculumOverviewComponent;
