import TeamMembersModule from './team-members'
import TeamMembersController from './team-members.controller';
import TeamMembersComponent from './team-members.component';
import TeamMembersTemplate from './team-members.html';

describe('TeamMembers', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TeamMembersModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TeamMembersController();
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
      expect(TeamMembersTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = TeamMembersComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(TeamMembersTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(TeamMembersController);
      });
  });
});
