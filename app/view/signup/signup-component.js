'use strict';


var compareTo = function() {
  return {
    require: 'ng-model',
    scope: {
      otherModelValue: '=compareTo'
    },
    link: function(scope, element, attributes, ngModel) {
      ngModel.$validators.compareTo = function(modelValue) {
        return modelValue == scope.otherModelValue;
      };
      scope.$watch('otherModelValue', function () {
        ngModel.$validate();
      });
    }
  };
};





module.directive('compareTo', compareTo);
