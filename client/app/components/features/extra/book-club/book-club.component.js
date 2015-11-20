import template from './book-club.html';
import controller from './book-club.controller';
import './book-club.styl';

let bookClubComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default bookClubComponent;
