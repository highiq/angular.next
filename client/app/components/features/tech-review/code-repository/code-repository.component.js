import template from './code-repository.html';
import controller from './code-repository.controller';
import './code-repository.styl';

let codeRepositoryComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default codeRepositoryComponent;
