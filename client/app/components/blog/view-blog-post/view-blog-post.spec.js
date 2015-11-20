import ViewBlogPostModule from './view-blog-post'
import ViewBlogPostController from './view-blog-post.controller';
import ViewBlogPostComponent from './view-blog-post.component';
import ViewBlogPostTemplate from './view-blog-post.html';

describe('ViewBlogPost', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ViewBlogPostModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ViewBlogPostController();
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
      expect(ViewBlogPostTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ViewBlogPostComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(ViewBlogPostTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ViewBlogPostController);
      });
  });
});
