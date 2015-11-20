import ForgotPasswordModule from './forgot-password'
import ForgotPasswordController from './forgot-password.controller';
import ForgotPasswordComponent from './forgot-password.component';
import ForgotPasswordTemplate from './forgot-password.html';

describe('ForgotPassword', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ForgotPasswordModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ForgotPasswordController();
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
      expect(ForgotPasswordTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ForgotPasswordComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(ForgotPasswordTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ForgotPasswordController);
      });
  });
});
