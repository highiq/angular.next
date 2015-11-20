import BestOpenSourceProjectModule from './best-open-source-project'
import BestOpenSourceProjectController from './best-open-source-project.controller';
import BestOpenSourceProjectComponent from './best-open-source-project.component';
import BestOpenSourceProjectTemplate from './best-open-source-project.html';

describe('BestOpenSourceProject', () => {
  let $rootScope, makeController;

  beforeEach(window.module(BestOpenSourceProjectModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new BestOpenSourceProjectController();
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
      expect(BestOpenSourceProjectTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = BestOpenSourceProjectComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(BestOpenSourceProjectTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(BestOpenSourceProjectController);
      });
  });
});
