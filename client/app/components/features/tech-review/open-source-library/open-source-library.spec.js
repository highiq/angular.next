import OpenSourceLibraryModule from './open-source-library'
import OpenSourceLibraryController from './open-source-library.controller';
import OpenSourceLibraryComponent from './open-source-library.component';
import OpenSourceLibraryTemplate from './open-source-library.html';

describe('OpenSourceLibrary', () => {
  let $rootScope, makeController;

  beforeEach(window.module(OpenSourceLibraryModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new OpenSourceLibraryController();
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
      expect(OpenSourceLibraryTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = OpenSourceLibraryComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(OpenSourceLibraryTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(OpenSourceLibraryController);
      });
  });
});
