import template from './it-books.html';
import controller from './it-books.controller';
import './it-books.styl';

let itBooksComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default itBooksComponent;
