'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (applyColumnFormatFunc) {
  return function generateYAxis() {
    var thisColumnFormatting = this.axis.userOptions.columnFormatting;
    if (this.value === 0 && (thisColumnFormatting.columnType === 'DATETIME' || thisColumnFormatting.columnType === 'DATE' || thisColumnFormatting.columnType === 'FORMULA_DATETIME')) {
      return '';
    }
    return applyColumnFormatFunc(this.value, thisColumnFormatting);
  };
};
//# sourceMappingURL=index.js.map