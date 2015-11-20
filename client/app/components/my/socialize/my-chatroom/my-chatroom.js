import angular from 'angular';
import uiRouter from 'angular-ui-router';
import myChatroomComponent from './my-chatroom.component';

let myChatroomModule = angular.module('my-chatroom', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('my-chatroom', {
      url: '/my-chatroom',
      template: '<my-chatroom></my-chatroom>'
    });
})

.directive('myChatroom', myChatroomComponent);

export default myChatroomModule;