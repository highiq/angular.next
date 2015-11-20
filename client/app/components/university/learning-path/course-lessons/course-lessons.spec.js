import CourseLessonsModule from './course-lessons'
import CourseLessonsController from './course-lessons.controller';
import CourseLessonsComponent from './course-lessons.component';
import CourseLessonsTemplate from './course-lessons.html';

describe('CourseLessons', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CourseLessonsModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CourseLessonsController();
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
      expect(CourseLessonsTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CourseLessonsComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(CourseLessonsTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CourseLessonsController);
      });
  });
});
