import BrowseEventsModule from './browse-events'
import BrowseEventsController from './browse-events.controller';
import BrowseEventsComponent from './browse-events.component';
import BrowseEventsTemplate from './browse-events.html';

describe('BrowseEvents', () => {
  let $rootScope, makeController;

  beforeEach(window.module(BrowseEventsModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new BrowseEventsController();
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
      expect(BrowseEventsTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = BrowseEventsComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(BrowseEventsTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(BrowseEventsController);
      });
  });
});
