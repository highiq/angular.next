import AltHeroModule from './alt-hero'
import AltHeroController from './alt-hero.controller';
import AltHeroComponent from './alt-hero.component';
import AltHeroTemplate from './alt-hero.html';

describe('AltHero', () => {
  let $rootScope, makeController;

  beforeEach(window.module(AltHeroModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new AltHeroController();
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
      expect(AltHeroTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = AltHeroComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(AltHeroTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(AltHeroController);
      });
  });
});
