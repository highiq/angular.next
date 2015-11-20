import CompanyNewsModule from './company-news'
import CompanyNewsController from './company-news.controller';
import CompanyNewsComponent from './company-news.component';
import CompanyNewsTemplate from './company-news.html';

describe('CompanyNews', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CompanyNewsModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CompanyNewsController();
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
      expect(CompanyNewsTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CompanyNewsComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(CompanyNewsTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CompanyNewsController);
      });
  });
});
