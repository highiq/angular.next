import template from './my-code-repositories.html';
import controller from './my-code-repositories.controller';
import './my-code-repositories.styl';

let myCodeRepositoriesComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default myCodeRepositoriesComponent;
