import AboutUsModule from './about-us'
import AboutUsController from './about-us.controller';
import AboutUsComponent from './about-us.component';
import AboutUsTemplate from './about-us.html';

describe('AboutUs', () => {
  let $rootScope, makeController;

  beforeEach(window.module(AboutUsModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new AboutUsController();
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
      expect(AboutUsTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = AboutUsComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(AboutUsTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(AboutUsController);
      });
  });
});
