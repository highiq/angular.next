import PeerAssessmentModule from './peer-assessment'
import PeerAssessmentController from './peer-assessment.controller';
import PeerAssessmentComponent from './peer-assessment.component';
import PeerAssessmentTemplate from './peer-assessment.html';

describe('PeerAssessment', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PeerAssessmentModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PeerAssessmentController();
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
      expect(PeerAssessmentTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = PeerAssessmentComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(PeerAssessmentTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(PeerAssessmentController);
      });
  });
});
