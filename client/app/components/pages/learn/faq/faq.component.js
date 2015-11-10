import template from './faq.html';
import controller from './faq.controller';
import './faq.styl';

let faqComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default faqComponent;
