import template from './my-profile.html';
import controller from './my-profile.controller';
import './my-profile.styl';

let myProfileComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default myProfileComponent;
