import MyProfileModule from './my-profile'
import MyProfileController from './my-profile.controller';
import MyProfileComponent from './my-profile.component';
import MyProfileTemplate from './my-profile.html';

describe('MyProfile', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MyProfileModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MyProfileController();
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
      expect(MyProfileTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MyProfileComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(MyProfileTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MyProfileController);
      });
  });
});
