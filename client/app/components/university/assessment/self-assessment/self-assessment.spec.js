import SelfAssessmentModule from './self-assessment'
import SelfAssessmentController from './self-assessment.controller';
import SelfAssessmentComponent from './self-assessment.component';
import SelfAssessmentTemplate from './self-assessment.html';

describe('SelfAssessment', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SelfAssessmentModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SelfAssessmentController();
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
      expect(SelfAssessmentTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = SelfAssessmentComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(SelfAssessmentTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SelfAssessmentController);
      });
  });
});
