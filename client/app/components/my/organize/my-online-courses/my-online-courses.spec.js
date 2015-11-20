import MyOnlineCoursesModule from './my-online-courses'
import MyOnlineCoursesController from './my-online-courses.controller';
import MyOnlineCoursesComponent from './my-online-courses.component';
import MyOnlineCoursesTemplate from './my-online-courses.html';

describe('MyOnlineCourses', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MyOnlineCoursesModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MyOnlineCoursesController();
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
      expect(MyOnlineCoursesTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MyOnlineCoursesComponent();

      it('includes the intended template',() => {
        expect(component.template).to.equal(MyOnlineCoursesTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MyOnlineCoursesController);
      });
  });
});
