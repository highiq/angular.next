import template from './my-bookmarks.html';
import controller from './my-bookmarks.controller';
import './my-bookmarks.styl';

let myBookmarksComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default myBookmarksComponent;
