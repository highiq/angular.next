import CourseLessonPlanModule from './course-lesson-plan'
import CourseLessonPlanController from './course-lesson-plan.controller';
import CourseLessonPlanComponent from './course-lesson-plan.component';
import CourseLessonPlanTemplate from './course-lesson-plan.html';

describe('CourseLessonPlan', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CourseLessonPlanModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CourseLessonPlanController();
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
      expect(CourseLessonPlanTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CourseLessonPlanComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(CourseLessonPlanTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CourseLessonPlanController);
      });
  });
});
