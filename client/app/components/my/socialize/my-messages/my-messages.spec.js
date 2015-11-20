import MyMessagesModule from './my-messages'
import MyMessagesController from './my-messages.controller';
import MyMessagesComponent from './my-messages.component';
import MyMessagesTemplate from './my-messages.html';

describe('MyMessages', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MyMessagesModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MyMessagesController();
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
      expect(MyMessagesTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MyMessagesComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(MyMessagesTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MyMessagesController);
      });
  });
});
