import template from './my-code-snippets.html';
import controller from './my-code-snippets.controller';
import './my-code-snippets.styl';

let myCodeSnippetsComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default myCodeSnippetsComponent;
