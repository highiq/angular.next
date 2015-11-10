import CodingBootcampModule from './coding-bootcamp'
import CodingBootcampController from './coding-bootcamp.controller';
import CodingBootcampComponent from './coding-bootcamp.component';
import CodingBootcampTemplate from './coding-bootcamp.html';

describe('CodingBootcamp', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CodingBootcampModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CodingBootcampController();
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
      expect(CodingBootcampTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CodingBootcampComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(CodingBootcampTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CodingBootcampController);
      });
  });
});
