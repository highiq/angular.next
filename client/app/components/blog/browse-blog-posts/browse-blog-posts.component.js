import template from './browse-blog-posts.html';
import controller from './browse-blog-posts.controller';
import './browse-blog-posts.styl';

let browseBlogPostsComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default browseBlogPostsComponent;
