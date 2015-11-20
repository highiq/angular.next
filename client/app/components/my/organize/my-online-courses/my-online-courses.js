import angular from 'angular';
import uiRouter from 'angular-ui-router';
import myOnlineCoursesComponent from './my-online-courses.component';

let myOnlineCoursesModule = angular.module('my-online-courses', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('my-online-courses', {
      url: '/my-online-courses',
      template: '<my-online-courses></my-online-courses>'
    });
})

.directive('myOnlineCourses', myOnlineCoursesComponent);

export default myOnlineCoursesModule;