import BestSlidePresentationModule from './best-slide-presentation'
import BestSlidePresentationController from './best-slide-presentation.controller';
import BestSlidePresentationComponent from './best-slide-presentation.component';
import BestSlidePresentationTemplate from './best-slide-presentation.html';

describe('BestSlidePresentation', () => {
  let $rootScope, makeController;

  beforeEach(window.module(BestSlidePresentationModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new BestSlidePresentationController();
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
      expect(BestSlidePresentationTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = BestSlidePresentationComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(BestSlidePresentationTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(BestSlidePresentationController);
      });
  });
});
