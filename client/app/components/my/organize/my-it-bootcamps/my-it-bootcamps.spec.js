import MyItBootcampsModule from './my-it-bootcamps'
import MyItBootcampsController from './my-it-bootcamps.controller';
import MyItBootcampsComponent from './my-it-bootcamps.component';
import MyItBootcampsTemplate from './my-it-bootcamps.html';

describe('MyItBootcamps', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MyItBootcampsModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MyItBootcampsController();
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
      expect(MyItBootcampsTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MyItBootcampsComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(MyItBootcampsTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MyItBootcampsController);
      });
  });
});
