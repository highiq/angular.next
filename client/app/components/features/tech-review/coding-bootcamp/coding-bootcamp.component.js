import template from './coding-bootcamp.html';
import controller from './coding-bootcamp.controller';
import './coding-bootcamp.styl';

let codingBootcampComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default codingBootcampComponent;
