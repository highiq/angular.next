import MyCodeRepositoriesModule from './my-code-repositories'
import MyCodeRepositoriesController from './my-code-repositories.controller';
import MyCodeRepositoriesComponent from './my-code-repositories.component';
import MyCodeRepositoriesTemplate from './my-code-repositories.html';

describe('MyCodeRepositories', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MyCodeRepositoriesModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MyCodeRepositoriesController();
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
      expect(MyCodeRepositoriesTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MyCodeRepositoriesComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(MyCodeRepositoriesTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MyCodeRepositoriesController);
      });
  });
});
