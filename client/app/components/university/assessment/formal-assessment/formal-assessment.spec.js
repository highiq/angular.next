import FormalAssessmentModule from './formal-assessment'
import FormalAssessmentController from './formal-assessment.controller';
import FormalAssessmentComponent from './formal-assessment.component';
import FormalAssessmentTemplate from './formal-assessment.html';

describe('FormalAssessment', () => {
  let $rootScope, makeController;

  beforeEach(window.module(FormalAssessmentModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new FormalAssessmentController();
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
      expect(FormalAssessmentTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = FormalAssessmentComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(FormalAssessmentTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(FormalAssessmentController);
      });
  });
});
