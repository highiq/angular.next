import BestLessonPlanModule from './best-lesson-plan'
import BestLessonPlanController from './best-lesson-plan.controller';
import BestLessonPlanComponent from './best-lesson-plan.component';
import BestLessonPlanTemplate from './best-lesson-plan.html';

describe('BestLessonPlan', () => {
  let $rootScope, makeController;

  beforeEach(window.module(BestLessonPlanModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new BestLessonPlanController();
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
      expect(BestLessonPlanTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = BestLessonPlanComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(BestLessonPlanTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(BestLessonPlanController);
      });
  });
});
