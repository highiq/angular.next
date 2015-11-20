import angular from 'angular';
import uiRouter from 'angular-ui-router';
import projectPortfolioComponent from './project-portfolio.component';

let projectPortfolioModule = angular.module('project-portfolio', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('project-portfolio', {
      url: '/project-portfolio',
      template: '<project-portfolio></project-portfolio>'
    });
})

.directive('projectPortfolio', projectPortfolioComponent);

export default projectPortfolioModule;