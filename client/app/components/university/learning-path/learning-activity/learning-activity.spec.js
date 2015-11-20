import LearningActivityModule from './learning-activity'
import LearningActivityController from './learning-activity.controller';
import LearningActivityComponent from './learning-activity.component';
import LearningActivityTemplate from './learning-activity.html';

describe('LearningActivity', () => {
  let $rootScope, makeController;

  beforeEach(window.module(LearningActivityModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new LearningActivityController();
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
      expect(LearningActivityTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = LearningActivityComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(LearningActivityTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(LearningActivityController);
      });
  });
});
