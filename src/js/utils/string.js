export const toCamelCase = (str = '') =>
  str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, i) => (i ? word.toUpperCase() : word.toLowerCase())).replace(/\s+/g, '');
