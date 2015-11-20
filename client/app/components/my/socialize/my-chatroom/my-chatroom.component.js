import template from './my-chatroom.html';
import controller from './my-chatroom.controller';
import './my-chatroom.styl';

let myChatroomComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default myChatroomComponent;
