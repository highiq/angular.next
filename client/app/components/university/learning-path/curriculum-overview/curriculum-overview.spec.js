import CurriculumOverviewModule from './curriculum-overview'
import CurriculumOverviewController from './curriculum-overview.controller';
import CurriculumOverviewComponent from './curriculum-overview.component';
import CurriculumOverviewTemplate from './curriculum-overview.html';

describe('CurriculumOverview', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CurriculumOverviewModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CurriculumOverviewController();
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
      expect(CurriculumOverviewTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CurriculumOverviewComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(CurriculumOverviewTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CurriculumOverviewController);
      });
  });
});
