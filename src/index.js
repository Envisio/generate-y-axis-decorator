(function (generateYAxisDecorator) {
  if (typeof module !== 'undefined') {
    module.exports = generateYAxisDecorator();
  } else {
    if (!window.Envisio) {
      window.Envisio = {};
    }
    if (!window.Envisio.generateYAxisDecorator) {
      window.Envisio.generateYAxisDecorator = generateYAxisDecorator();
    }
  }
}(() => function (applyColumnFormatFunc) {
  return function () {
    const thisColumnFormatting = this.axis.userOptions.columnFormatting;
    if (this.value === 0
        && (thisColumnFormatting.columnType === 'DATETIME'
          || thisColumnFormatting.columnType === 'DATE'
          || thisColumnFormatting.columnType === 'FORMULA_DATETIME')) {
      return '';
    }
    return applyColumnFormatFunc(this.value, thisColumnFormatting);
  };
}));
