import template from './video-channels.html';
import controller from './video-channels.controller';
import './video-channels.styl';

let videoChannelsComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default videoChannelsComponent;
