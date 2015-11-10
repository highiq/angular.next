import template from './online-it-training.html';
import controller from './online-it-training.controller';
import './online-it-training.styl';

let onlineItTrainingComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default onlineItTrainingComponent;
