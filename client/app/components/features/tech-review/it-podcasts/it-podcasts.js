import angular from 'angular';
import uiRouter from 'angular-ui-router';
import itPodcastsComponent from './it-podcasts.component';

let itPodcastsModule = angular.module('it-podcasts', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('it-podcasts', {
      url: '/it-podcasts',
      template: '<it-podcasts></it-podcasts>'
    });
})

.directive('itPodcasts', itPodcastsComponent);

export default itPodcastsModule;