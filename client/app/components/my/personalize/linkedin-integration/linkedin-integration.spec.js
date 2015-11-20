import LinkedinIntegrationModule from './linkedin-integration'
import LinkedinIntegrationController from './linkedin-integration.controller';
import LinkedinIntegrationComponent from './linkedin-integration.component';
import LinkedinIntegrationTemplate from './linkedin-integration.html';

describe('LinkedinIntegration', () => {
  let $rootScope, makeController;

  beforeEach(window.module(LinkedinIntegrationModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new LinkedinIntegrationController();
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
      expect(LinkedinIntegrationTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = LinkedinIntegrationComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(LinkedinIntegrationTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(LinkedinIntegrationController);
      });
  });
});
