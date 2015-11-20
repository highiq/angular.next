import VideoChannelsModule from './video-channels'
import VideoChannelsController from './video-channels.controller';
import VideoChannelsComponent from './video-channels.component';
import VideoChannelsTemplate from './video-channels.html';

describe('VideoChannels', () => {
  let $rootScope, makeController;

  beforeEach(window.module(VideoChannelsModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new VideoChannelsController();
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
      expect(VideoChannelsTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = VideoChannelsComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(VideoChannelsTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(VideoChannelsController);
      });
  });
});
