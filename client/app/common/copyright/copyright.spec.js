import CopyrightModule from './copyright'
import CopyrightController from './copyright.controller';
import CopyrightComponent from './copyright.component';
import CopyrightTemplate from './copyright.html';

describe('Copyright', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CopyrightModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CopyrightController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a brand property', () => {
      let controller = makeController();
      expect(controller).to.have.property('brand');
    });
    
    it('has a year property', () => {
      let controller = makeController();
      expect(controller).to.have.property('year');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has brand in template', () => {
      expect(CopyrightTemplate).to.match(/{{\s?vm\.brand\s?}}/g);
    });
    
    it('has year in template', () => {
      expect(CopyrightTemplate).to.match(/{{\s?vm\.year\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CopyrightComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(CopyrightTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CopyrightController);
      });
  });
});
