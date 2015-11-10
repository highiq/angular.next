import angular from 'angular';
import uiRouter from 'angular-ui-router';
import <%= name %>Component from './<%= hyphenated %>.component';

let <%= name %>Module = angular.module('<%= hyphenated %>', [
  uiRouter
])

.directive('<%= name %>', <%= name %>Component);

export default <%= name %>Module;