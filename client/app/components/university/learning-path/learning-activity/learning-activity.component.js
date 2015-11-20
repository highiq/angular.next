import template from './learning-activity.html';
import controller from './learning-activity.controller';
import './learning-activity.styl';

let learningActivityComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default learningActivityComponent;
