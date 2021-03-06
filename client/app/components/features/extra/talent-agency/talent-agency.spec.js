import TalentAgencyModule from './talent-agency'
import TalentAgencyController from './talent-agency.controller';
import TalentAgencyComponent from './talent-agency.component';
import TalentAgencyTemplate from './talent-agency.html';

describe('TalentAgency', () => {
  let $rootScope, makeController;

  beforeEach(window.module(TalentAgencyModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TalentAgencyController();
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
      expect(TalentAgencyTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = TalentAgencyComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(TalentAgencyTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(TalentAgencyController);
      });
  });
});
