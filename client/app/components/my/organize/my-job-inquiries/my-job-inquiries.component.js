import template from './my-job-inquiries.html';
import controller from './my-job-inquiries.controller';
import './my-job-inquiries.styl';

let myJobInquiriesComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default myJobInquiriesComponent;
