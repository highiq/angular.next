import IqMeterModule from './iq-meter'
import IqMeterController from './iq-meter.controller';
import IqMeterComponent from './iq-meter.component';
import IqMeterTemplate from './iq-meter.html';

describe('IqMeter', () => {
  let $rootScope, makeController;

  beforeEach(window.module(IqMeterModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new IqMeterController();
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
      expect(IqMeterTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = IqMeterComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(IqMeterTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(IqMeterController);
      });
  });
});
