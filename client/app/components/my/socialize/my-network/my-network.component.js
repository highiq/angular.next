import template from './my-network.html';
import controller from './my-network.controller';
import './my-network.styl';

let myNetworkComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default myNetworkComponent;
