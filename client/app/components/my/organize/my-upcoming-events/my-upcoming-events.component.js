import template from './my-upcoming-events.html';
import controller from './my-upcoming-events.controller';
import './my-upcoming-events.styl';

let myUpcomingEventsComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default myUpcomingEventsComponent;
