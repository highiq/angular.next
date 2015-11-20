import SkillGapAnalysisModule from './skill-gap-analysis'
import SkillGapAnalysisController from './skill-gap-analysis.controller';
import SkillGapAnalysisComponent from './skill-gap-analysis.component';
import SkillGapAnalysisTemplate from './skill-gap-analysis.html';

describe('SkillGapAnalysis', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SkillGapAnalysisModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SkillGapAnalysisController();
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
      expect(SkillGapAnalysisTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = SkillGapAnalysisComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(SkillGapAnalysisTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SkillGapAnalysisController);
      });
  });
});
