import template from './<%= hyphenated %>.html';
import controller from './<%= hyphenated %>.controller';
import './<%= hyphenated %>.styl';

let <%= name %>Component = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true
  };
};

export default <%= name %>Component;
