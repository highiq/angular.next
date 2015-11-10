import angular from 'angular';
import uiRouter from 'angular-ui-router';
import browseEventsComponent from './browse-events.component';

let browseEventsModule = angular.module('browse-events', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('browse-events', {
      url: '/browse-events',
      template: '<browse-events></browse-events>'
    });
})

.directive('browseEvents', browseEventsComponent);

export default browseEventsModule;