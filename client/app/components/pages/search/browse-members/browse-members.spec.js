import BrowseMembersModule from './browse-members'
import BrowseMembersController from './browse-members.controller';
import BrowseMembersComponent from './browse-members.component';
import BrowseMembersTemplate from './browse-members.html';

describe('BrowseMembers', () => {
  let $rootScope, makeController;

  beforeEach(window.module(BrowseMembersModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new BrowseMembersController();
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
      expect(BrowseMembersTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = BrowseMembersComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(BrowseMembersTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(BrowseMembersController);
      });
  });
});
