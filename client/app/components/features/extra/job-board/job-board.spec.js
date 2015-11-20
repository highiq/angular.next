import JobBoardModule from './job-board'
import JobBoardController from './job-board.controller';
import JobBoardComponent from './job-board.component';
import JobBoardTemplate from './job-board.html';

describe('JobBoard', () => {
  let $rootScope, makeController;

  beforeEach(window.module(JobBoardModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new JobBoardController();
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
      expect(JobBoardTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = JobBoardComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(JobBoardTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(JobBoardController);
      });
  });
});
