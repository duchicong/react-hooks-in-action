import { TClassName } from "../type";
import { keysToArray } from "./array";

function classNames (...arr: TClassName[]): string {
  const classes: string[] = arr.map(item => {
    if (typeof item === 'object') return keysToArray(item).join(' ');
    return !!item ? item : '';
  });

  return classes.join(' ');
}

export {
  classNames
}
