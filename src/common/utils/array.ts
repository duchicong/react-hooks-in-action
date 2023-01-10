function keysToArray (obj: Record<string, any>): string[] {
  return Object.keys(obj).map(key => {
    if (typeof obj !== 'object') return '';
    if (!!obj[key]) return key;
    return '';
  });
}

export { 
  keysToArray
}
