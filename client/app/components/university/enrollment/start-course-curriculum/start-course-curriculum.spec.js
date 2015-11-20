import StartCourseCurriculumModule from './start-course-curriculum'
import StartCourseCurriculumController from './start-course-curriculum.controller';
import StartCourseCurriculumComponent from './start-course-curriculum.component';
import StartCourseCurriculumTemplate from './start-course-curriculum.html';

describe('StartCourseCurriculum', () => {
  let $rootScope, makeController;

  beforeEach(window.module(StartCourseCurriculumModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new StartCourseCurriculumController();
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
      expect(StartCourseCurriculumTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = StartCourseCurriculumComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(StartCourseCurriculumTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(StartCourseCurriculumController);
      });
  });
});
