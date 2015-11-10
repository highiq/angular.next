import <%= uppercase %>Module from './<%= hyphenated %>'
import <%= uppercase %>Controller from './<%= hyphenated %>.controller';
import <%= uppercase %>Component from './<%= hyphenated %>.component';
import <%= uppercase %>Template from './<%= hyphenated %>.html';

describe('<%= uppercase %>', () => {
  let $rootScope, makeController;

  beforeEach(window.module(<%= uppercase %>Module.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new <%= uppercase %>Controller();
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
      expect(<%= uppercase %>Template).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = <%= uppercase %>Component();

      it('includes the intended template',() => {
        expect(component.template).to.equal(<%= uppercase %>Template);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(<%= uppercase %>Controller);
      });
  });
});
