import template from './iq-meter.html';
import controller from './iq-meter.controller';
import './iq-meter.styl';

let iqMeterComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default iqMeterComponent;
