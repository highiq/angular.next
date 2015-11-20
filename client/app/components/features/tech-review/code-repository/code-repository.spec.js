import CodeRepositoryModule from './code-repository'
import CodeRepositoryController from './code-repository.controller';
import CodeRepositoryComponent from './code-repository.component';
import CodeRepositoryTemplate from './code-repository.html';

describe('CodeRepository', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CodeRepositoryModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CodeRepositoryController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property', () => {
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template', () => {
      expect(CodeRepositoryTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CodeRepositoryComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(CodeRepositoryTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CodeRepositoryController);
      });
  });
});
