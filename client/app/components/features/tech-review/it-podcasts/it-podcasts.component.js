import template from './it-podcasts.html';
import controller from './it-podcasts.controller';
import './it-podcasts.styl';

let itPodcastsComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default itPodcastsComponent;
