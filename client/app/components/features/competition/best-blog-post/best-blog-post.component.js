import template from './best-blog-post.html';
import controller from './best-blog-post.controller';
import './best-blog-post.styl';

let bestBlogPostComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default bestBlogPostComponent;
