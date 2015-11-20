import template from './view-blog-post.html';
import controller from './view-blog-post.controller';
import './view-blog-post.styl';

let viewBlogPostComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default viewBlogPostComponent;
