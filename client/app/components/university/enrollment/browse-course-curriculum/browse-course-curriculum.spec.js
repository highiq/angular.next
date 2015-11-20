import BrowseCourseCurriculumModule from './browse-course-curriculum'
import BrowseCourseCurriculumController from './browse-course-curriculum.controller';
import BrowseCourseCurriculumComponent from './browse-course-curriculum.component';
import BrowseCourseCurriculumTemplate from './browse-course-curriculum.html';

describe('BrowseCourseCurriculum', () => {
  let $rootScope, makeController;

  beforeEach(window.module(BrowseCourseCurriculumModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new BrowseCourseCurriculumController();
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
      expect(BrowseCourseCurriculumTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = BrowseCourseCurriculumComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(BrowseCourseCurriculumTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(BrowseCourseCurriculumController);
      });
  });
});
