import MyCodeSnippetsModule from './my-code-snippets'
import MyCodeSnippetsController from './my-code-snippets.controller';
import MyCodeSnippetsComponent from './my-code-snippets.component';
import MyCodeSnippetsTemplate from './my-code-snippets.html';

describe('MyCodeSnippets', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MyCodeSnippetsModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MyCodeSnippetsController();
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
      expect(MyCodeSnippetsTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MyCodeSnippetsComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(MyCodeSnippetsTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MyCodeSnippetsController);
      });
  });
});
