import template from './company-news.html';
import controller from './company-news.controller';
import './company-news.styl';

let companyNewsComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default companyNewsComponent;
