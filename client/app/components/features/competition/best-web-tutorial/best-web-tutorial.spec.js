import BestWebTutorialModule from './best-web-tutorial'
import BestWebTutorialController from './best-web-tutorial.controller';
import BestWebTutorialComponent from './best-web-tutorial.component';
import BestWebTutorialTemplate from './best-web-tutorial.html';

describe('BestWebTutorial', () => {
  let $rootScope, makeController;

  beforeEach(window.module(BestWebTutorialModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new BestWebTutorialController();
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
      expect(BestWebTutorialTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = BestWebTutorialComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(BestWebTutorialTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(BestWebTutorialController);
      });
  });
});
