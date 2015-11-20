import BrowseCompaniesModule from './browse-companies'
import BrowseCompaniesController from './browse-companies.controller';
import BrowseCompaniesComponent from './browse-companies.component';
import BrowseCompaniesTemplate from './browse-companies.html';

describe('BrowseCompanies', () => {
  let $rootScope, makeController;

  beforeEach(window.module(BrowseCompaniesModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new BrowseCompaniesController();
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
      expect(BrowseCompaniesTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = BrowseCompaniesComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(BrowseCompaniesTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(BrowseCompaniesController);
      });
  });
});
