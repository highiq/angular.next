import CourseLessonPathModule from './course-lesson-path'
import CourseLessonPathController from './course-lesson-path.controller';
import CourseLessonPathComponent from './course-lesson-path.component';
import CourseLessonPathTemplate from './course-lesson-path.html';

describe('CourseLessonPath', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CourseLessonPathModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CourseLessonPathController();
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
      expect(CourseLessonPathTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CourseLessonPathComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(CourseLessonPathTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CourseLessonPathController);
      });
  });
});
