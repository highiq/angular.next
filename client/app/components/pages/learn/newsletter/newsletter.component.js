import template from './newsletter.html';
import controller from './newsletter.controller';
import './newsletter.styl';

let newsletterComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default newsletterComponent;
