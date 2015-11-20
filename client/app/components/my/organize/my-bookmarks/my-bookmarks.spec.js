import MyBookmarksModule from './my-bookmarks'
import MyBookmarksController from './my-bookmarks.controller';
import MyBookmarksComponent from './my-bookmarks.component';
import MyBookmarksTemplate from './my-bookmarks.html';

describe('MyBookmarks', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MyBookmarksModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MyBookmarksController();
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
      expect(MyBookmarksTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MyBookmarksComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(MyBookmarksTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MyBookmarksController);
      });
  });
});
