import TechTalksModule from './tech-talks'
import TechTalksController from './tech-talks.controller';
import TechTalksComponent from './tech-talks.component';
import TechTalksTemplate from './tech-talks.html';

describe('TechTalks', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TechTalksModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TechTalksController();
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
      expect(TechTalksTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = TechTalksComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(TechTalksTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(TechTalksController);
      });
  });
});
