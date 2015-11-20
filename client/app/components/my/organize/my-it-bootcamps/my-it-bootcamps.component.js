import template from './my-it-bootcamps.html';
import controller from './my-it-bootcamps.controller';
import './my-it-bootcamps.styl';

let myItBootcampsComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default myItBootcampsComponent;
