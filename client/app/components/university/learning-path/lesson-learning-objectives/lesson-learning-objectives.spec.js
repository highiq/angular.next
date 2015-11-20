import LessonLearningObjectivesModule from './lesson-learning-objectives'
import LessonLearningObjectivesController from './lesson-learning-objectives.controller';
import LessonLearningObjectivesComponent from './lesson-learning-objectives.component';
import LessonLearningObjectivesTemplate from './lesson-learning-objectives.html';

describe('LessonLearningObjectives', () => {
  let $rootScope, makeController;

  beforeEach(window.module(LessonLearningObjectivesModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new LessonLearningObjectivesController();
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
      expect(LessonLearningObjectivesTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = LessonLearningObjectivesComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(LessonLearningObjectivesTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(LessonLearningObjectivesController);
      });
  });
});
