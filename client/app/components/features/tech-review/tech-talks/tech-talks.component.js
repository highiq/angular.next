import template from './tech-talks.html';
import controller from './tech-talks.controller';
import './tech-talks.styl';

let techTalksComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default techTalksComponent;
