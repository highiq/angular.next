import angular from 'angular';
import uiRouter from 'angular-ui-router';
import viewBlogPostComponent from './view-blog-post.component';

let viewBlogPostModule = angular.module('view-blog-post', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('view-blog-post', {
      url: '/view-blog-post',
      template: '<view-blog-post></view-blog-post>'
    });
})

.directive('viewBlogPost', viewBlogPostComponent);

export default viewBlogPostModule;