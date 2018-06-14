export default function (applyColumnFormatFunc) {
  return function generateYAxis() {
    const thisColumnFormatting = this.axis.userOptions.columnFormatting;
    if (this.value === 0
      && (thisColumnFormatting.columnType === 'DATETIME'
        || thisColumnFormatting.columnType === 'DATE'
        || thisColumnFormatting.columnType === 'FORMULA_DATETIME')) {
      return '';
    }
    return applyColumnFormatFunc(this.value, thisColumnFormatting);
  };
}
