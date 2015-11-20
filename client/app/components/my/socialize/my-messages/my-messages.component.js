import template from './my-messages.html';
import controller from './my-messages.controller';
import './my-messages.styl';

let myMessagesComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default myMessagesComponent;
