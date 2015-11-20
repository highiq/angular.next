import NewsletterModule from './newsletter'
import NewsletterController from './newsletter.controller';
import NewsletterComponent from './newsletter.component';
import NewsletterTemplate from './newsletter.html';

describe('Newsletter', () => {
  let $rootScope, makeController;

  beforeEach(window.module(NewsletterModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new NewsletterController();
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
      expect(NewsletterTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = NewsletterComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(NewsletterTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(NewsletterController);
      });
  });
});
