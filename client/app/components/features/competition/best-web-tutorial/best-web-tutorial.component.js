import template from './best-web-tutorial.html';
import controller from './best-web-tutorial.controller';
import './best-web-tutorial.styl';

let bestWebTutorialComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default bestWebTutorialComponent;
