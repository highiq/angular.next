import ItPodcastsModule from './it-podcasts'
import ItPodcastsController from './it-podcasts.controller';
import ItPodcastsComponent from './it-podcasts.component';
import ItPodcastsTemplate from './it-podcasts.html';

describe('ItPodcasts', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ItPodcastsModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ItPodcastsController();
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
      expect(ItPodcastsTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ItPodcastsComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(ItPodcastsTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ItPodcastsController);
      });
  });
});
