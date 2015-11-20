import angular from 'angular';
import uiRouter from 'angular-ui-router';
import videoChannelsComponent from './video-channels.component';

let videoChannelsModule = angular.module('video-channels', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('video-channels', {
      url: '/video-channels',
      template: '<video-channels></video-channels>'
    });
})

.directive('videoChannels', videoChannelsComponent);

export default videoChannelsModule;