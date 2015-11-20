import SkillSetsModule from './skill-sets'
import SkillSetsController from './skill-sets.controller';
import SkillSetsComponent from './skill-sets.component';
import SkillSetsTemplate from './skill-sets.html';

describe('SkillSets', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SkillSetsModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SkillSetsController();
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
      expect(SkillSetsTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = SkillSetsComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(SkillSetsTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SkillSetsController);
      });
  });
});
