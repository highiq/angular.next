import TitsAndGritsModule from './tits-and-grits'
import TitsAndGritsController from './tits-and-grits.controller';
import TitsAndGritsComponent from './tits-and-grits.component';
import TitsAndGritsTemplate from './tits-and-grits.html';

describe('TitsAndGrits', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TitsAndGritsModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TitsAndGritsController();
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
      expect(TitsAndGritsTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = TitsAndGritsComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(TitsAndGritsTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(TitsAndGritsController);
      });
  });
});
