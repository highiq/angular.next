import template from './my-online-courses.html';
import controller from './my-online-courses.controller';
import './my-online-courses.styl';

let myOnlineCoursesComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default myOnlineCoursesComponent;
