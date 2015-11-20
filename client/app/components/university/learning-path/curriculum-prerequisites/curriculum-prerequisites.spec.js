import CurriculumPrerequisitesModule from './curriculum-prerequisites'
import CurriculumPrerequisitesController from './curriculum-prerequisites.controller';
import CurriculumPrerequisitesComponent from './curriculum-prerequisites.component';
import CurriculumPrerequisitesTemplate from './curriculum-prerequisites.html';

describe('CurriculumPrerequisites', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CurriculumPrerequisitesModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CurriculumPrerequisitesController();
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
      expect(CurriculumPrerequisitesTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CurriculumPrerequisitesComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(CurriculumPrerequisitesTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CurriculumPrerequisitesController);
      });
  });
});
