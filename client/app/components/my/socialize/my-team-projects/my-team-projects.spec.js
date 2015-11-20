import MyTeamProjectsModule from './my-team-projects'
import MyTeamProjectsController from './my-team-projects.controller';
import MyTeamProjectsComponent from './my-team-projects.component';
import MyTeamProjectsTemplate from './my-team-projects.html';

describe('MyTeamProjects', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MyTeamProjectsModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MyTeamProjectsController();
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
      expect(MyTeamProjectsTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MyTeamProjectsComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(MyTeamProjectsTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MyTeamProjectsController);
      });
  });
});
