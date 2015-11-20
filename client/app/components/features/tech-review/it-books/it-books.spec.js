import ItBooksModule from './it-books'
import ItBooksController from './it-books.controller';
import ItBooksComponent from './it-books.component';
import ItBooksTemplate from './it-books.html';

describe('ItBooks', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ItBooksModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ItBooksController();
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
      expect(ItBooksTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ItBooksComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(ItBooksTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ItBooksController);
      });
  });
});
