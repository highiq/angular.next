import template from './curriculum-enrollment.html';
import controller from './curriculum-enrollment.controller';
import './curriculum-enrollment.styl';

let curriculumEnrollmentComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default curriculumEnrollmentComponent;
