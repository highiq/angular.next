import CurriculumEnrollmentModule from './curriculum-enrollment'
import CurriculumEnrollmentController from './curriculum-enrollment.controller';
import CurriculumEnrollmentComponent from './curriculum-enrollment.component';
import CurriculumEnrollmentTemplate from './curriculum-enrollment.html';

describe('CurriculumEnrollment', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CurriculumEnrollmentModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CurriculumEnrollmentController();
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
      expect(CurriculumEnrollmentTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CurriculumEnrollmentComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(CurriculumEnrollmentTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CurriculumEnrollmentController);
      });
  });
});
