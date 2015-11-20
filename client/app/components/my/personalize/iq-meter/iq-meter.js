import angular from 'angular';
import uiRouter from 'angular-ui-router';
import iqMeterComponent from './iq-meter.component';

let iqMeterModule = angular.module('iq-meter', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('iq-meter', {
      url: '/iq-meter',
      template: '<iq-meter></iq-meter>'
    });
})

.directive('iqMeter', iqMeterComponent);

export default iqMeterModule;