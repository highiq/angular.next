import BrowseJobsModule from './browse-jobs'
import BrowseJobsController from './browse-jobs.controller';
import BrowseJobsComponent from './browse-jobs.component';
import BrowseJobsTemplate from './browse-jobs.html';

describe('BrowseJobs', () => {
  let $rootScope, makeController;

  beforeEach(window.module(BrowseJobsModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new BrowseJobsController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property', () => {
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template', () => {
      expect(BrowseJobsTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = BrowseJobsComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(BrowseJobsTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(BrowseJobsController);
      });
  });
});
