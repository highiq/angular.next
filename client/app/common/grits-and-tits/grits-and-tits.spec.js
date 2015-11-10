import GritsAndTitsModule from './grits-and-tits'
import GritsAndTitsController from './grits-and-tits.controller';
import GritsAndTitsComponent from './grits-and-tits.component';
import GritsAndTitsTemplate from './grits-and-tits.html';

describe('GritsAndTits', () => {
  let $rootScope, makeController;

  beforeEach(window.module(GritsAndTitsModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new GritsAndTitsController();
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
      expect(GritsAndTitsTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = GritsAndTitsComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(GritsAndTitsTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(GritsAndTitsController);
      });
  });
});
