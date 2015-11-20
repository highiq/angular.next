import angular from 'angular';
import uiRouter from 'angular-ui-router';
import eventCalendarComponent from './event-calendar.component';

let eventCalendarModule = angular.module('event-calendar', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('event-calendar', {
      url: '/event-calendar',
      template: '<event-calendar></event-calendar>'
    });
})

.directive('eventCalendar', eventCalendarComponent);

export default eventCalendarModule;