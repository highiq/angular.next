import BrowseBlogPostsModule from './browse-blog-posts'
import BrowseBlogPostsController from './browse-blog-posts.controller';
import BrowseBlogPostsComponent from './browse-blog-posts.component';
import BrowseBlogPostsTemplate from './browse-blog-posts.html';

describe('BrowseBlogPosts', () => {
  let $rootScope, makeController;

  beforeEach(window.module(BrowseBlogPostsModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new BrowseBlogPostsController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(BrowseBlogPostsTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = BrowseBlogPostsComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(BrowseBlogPostsTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(BrowseBlogPostsController);
      });
  });
});
