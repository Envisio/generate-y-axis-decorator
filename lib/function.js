'use strict';

var Envisio = Envisio || {};
Envisio.generateYAxisDecorator = Envisio.generateYAxisDecorator || function (applyColumnFormatFunc) {
  return function generateYAxisDecorator() {
    var thisColumnFormatting = this.axis.userOptions.columnFormatting;
    if (this.value === 0 && (thisColumnFormatting.columnType === 'DATETIME' || thisColumnFormatting.columnType === 'DATE' || thisColumnFormatting.columnType === 'FORMULA_DATETIME')) {
      return '';
    }
    return applyColumnFormatFunc(this.value, thisColumnFormatting);
  };
};
//# sourceMappingURL=function.js.map