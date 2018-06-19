const Envisio = Envisio || {};
Envisio.generateYAxisDecorator = Envisio.generateYAxisDecorator || function (applyColumnFormatFunc) {
  return function generateYAxisDecorator() {
    const thisColumnFormatting = this.axis.userOptions.columnFormatting;
    if (this.value === 0
      && (thisColumnFormatting.columnType === 'DATETIME'
        || thisColumnFormatting.columnType === 'DATE'
        || thisColumnFormatting.columnType === 'FORMULA_DATETIME')) {
      return '';
    }
    return applyColumnFormatFunc(this.value, thisColumnFormatting);
  };
};
