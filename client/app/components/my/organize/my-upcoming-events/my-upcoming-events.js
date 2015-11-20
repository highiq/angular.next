import angular from 'angular';
import uiRouter from 'angular-ui-router';
import myUpcomingEventsComponent from './my-upcoming-events.component';

let myUpcomingEventsModule = angular.module('my-upcoming-events', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('my-upcoming-events', {
      url: '/my-upcoming-events',
      template: '<my-upcoming-events></my-upcoming-events>'
    });
})

.directive('myUpcomingEvents', myUpcomingEventsComponent);

export default myUpcomingEventsModule;