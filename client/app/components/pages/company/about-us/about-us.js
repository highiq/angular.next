import angular from 'angular';
import uiRouter from 'angular-ui-router';
import aboutUsComponent from './about-us.component';

let aboutUsModule = angular.module('about-us', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('about-us', {
      url: '/about-us',
      template: '<about-us></about-us>'
    });
})

.directive('aboutUs', aboutUsComponent);

export default aboutUsModule;
