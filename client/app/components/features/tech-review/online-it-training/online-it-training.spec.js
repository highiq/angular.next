import OnlineItTrainingModule from './online-it-training'
import OnlineItTrainingController from './online-it-training.controller';
import OnlineItTrainingComponent from './online-it-training.component';
import OnlineItTrainingTemplate from './online-it-training.html';

describe('OnlineItTraining', () => {
  let $rootScope, makeController;

  beforeEach(window.module(OnlineItTrainingModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new OnlineItTrainingController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property', () => {
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template', () => {
      expect(OnlineItTrainingTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = OnlineItTrainingComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(OnlineItTrainingTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(OnlineItTrainingController);
      });
  });
});
