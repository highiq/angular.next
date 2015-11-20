import GithubIntegrationModule from './github-integration'
import GithubIntegrationController from './github-integration.controller';
import GithubIntegrationComponent from './github-integration.component';
import GithubIntegrationTemplate from './github-integration.html';

describe('GithubIntegration', () => {
  let $rootScope, makeController;

  beforeEach(window.module(GithubIntegrationModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new GithubIntegrationController();
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
      expect(GithubIntegrationTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = GithubIntegrationComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(GithubIntegrationTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(GithubIntegrationController);
      });
  });
});
