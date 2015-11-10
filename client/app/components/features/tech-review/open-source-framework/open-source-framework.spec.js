import OpenSourceFrameworkModule from './open-source-framework'
import OpenSourceFrameworkController from './open-source-framework.controller';
import OpenSourceFrameworkComponent from './open-source-framework.component';
import OpenSourceFrameworkTemplate from './open-source-framework.html';

describe('OpenSourceFramework', () => {
  let $rootScope, makeController;

  beforeEach(window.module(OpenSourceFrameworkModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new OpenSourceFrameworkController();
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
      expect(OpenSourceFrameworkTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = OpenSourceFrameworkComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(OpenSourceFrameworkTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(OpenSourceFrameworkController);
      });
  });
});
