import template from './browse-events.html';
import controller from './browse-events.controller';
import './browse-events.styl';

let browseEventsComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default browseEventsComponent;
