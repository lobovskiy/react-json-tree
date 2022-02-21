function getConfigPropertyValue(column, property) {
  if (typeof column === 'object') {
    return column[property] || '';
  } else {
    return column || '';
  }
}

export { getConfigPropertyValue };
