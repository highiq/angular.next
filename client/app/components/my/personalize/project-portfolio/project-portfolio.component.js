import template from './project-portfolio.html';
import controller from './project-portfolio.controller';
import './project-portfolio.styl';

let projectPortfolioComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default projectPortfolioComponent;
