import ReviewSyllabusModule from './review-syllabus'
import ReviewSyllabusController from './review-syllabus.controller';
import ReviewSyllabusComponent from './review-syllabus.component';
import ReviewSyllabusTemplate from './review-syllabus.html';

describe('ReviewSyllabus', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ReviewSyllabusModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ReviewSyllabusController();
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
      expect(ReviewSyllabusTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ReviewSyllabusComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(ReviewSyllabusTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ReviewSyllabusController);
      });
  });
});
