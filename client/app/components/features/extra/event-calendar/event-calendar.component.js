import template from './event-calendar.html';
import controller from './event-calendar.controller';
import './event-calendar.styl';

let eventCalendarComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default eventCalendarComponent;
