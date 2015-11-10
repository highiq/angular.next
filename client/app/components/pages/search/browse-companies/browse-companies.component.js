import template from './browse-companies.html';
import controller from './browse-companies.controller';
import './browse-companies.styl';

let browseCompaniesComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default browseCompaniesComponent;
