import template from './review-syllabus.html';
import controller from './review-syllabus.controller';
import './review-syllabus.styl';

let reviewSyllabusComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default reviewSyllabusComponent;
