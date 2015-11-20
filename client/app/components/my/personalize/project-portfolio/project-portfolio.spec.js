import ProjectPortfolioModule from './project-portfolio'
import ProjectPortfolioController from './project-portfolio.controller';
import ProjectPortfolioComponent from './project-portfolio.component';
import ProjectPortfolioTemplate from './project-portfolio.html';

describe('ProjectPortfolio', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ProjectPortfolioModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ProjectPortfolioController();
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
      expect(ProjectPortfolioTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ProjectPortfolioComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(ProjectPortfolioTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ProjectPortfolioController);
      });
  });
});
