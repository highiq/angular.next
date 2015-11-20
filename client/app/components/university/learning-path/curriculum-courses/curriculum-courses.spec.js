import CurriculumCoursesModule from './curriculum-courses'
import CurriculumCoursesController from './curriculum-courses.controller';
import CurriculumCoursesComponent from './curriculum-courses.component';
import CurriculumCoursesTemplate from './curriculum-courses.html';

describe('CurriculumCourses', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CurriculumCoursesModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CurriculumCoursesController();
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
      expect(CurriculumCoursesTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CurriculumCoursesComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(CurriculumCoursesTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CurriculumCoursesController);
      });
  });
});
