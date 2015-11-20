import angular from 'angular';
import uiRouter from 'angular-ui-router';
import bestBlogPostComponent from './best-blog-post.component';

let bestBlogPostModule = angular.module('best-blog-post', [
  uiRouter
])

.config(($stateProvider) => {
  $stateProvider
    .state('best-blog-post', {
      url: '/best-blog-post',
      template: '<best-blog-post></best-blog-post>'
    });
})

.directive('bestBlogPost', bestBlogPostComponent);

export default bestBlogPostModule;