import ContactUsModule from './contact-us'
import ContactUsController from './contact-us.controller';
import ContactUsComponent from './contact-us.component';
import ContactUsTemplate from './contact-us.html';

describe('ContactUs', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ContactUsModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ContactUsController();
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
      expect(ContactUsTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ContactUsComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(ContactUsTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ContactUsController);
      });
  });
});
