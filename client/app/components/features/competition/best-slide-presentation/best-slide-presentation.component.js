import template from './best-slide-presentation.html';
import controller from './best-slide-presentation.controller';
import './best-slide-presentation.styl';

let bestSlidePresentationComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default bestSlidePresentationComponent;
