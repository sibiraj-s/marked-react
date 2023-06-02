import assign from 'lodash/assign';
import assignWith from 'lodash/assignWith';
import isUndefined from 'lodash/isUndefined';

const htmlUnescapes: Record<string, string> = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'",
};

/** Used to match HTML entities and HTML characters. */
const reEscapedHtml = /&(?:amp|lt|gt|quot|#(?:0+)?39);/g;
const reHasEscapedHtml = RegExp(reEscapedHtml.source);

export const unescape = (str = '') => {
  return reHasEscapedHtml.test(str) ? str.replace(reEscapedHtml, (entity) => htmlUnescapes[entity] || "'") : str;
};

export const joinBase = (path: string, base?: string) => {
  if (!base) {
    return path;
  }

  try {
    return new URL(path, base).href;
  } catch {
    return path;
  }
};

export function mergeProps<A, B>(a: A, b: B): B & A;
export function mergeProps<A, B, C>(a: A, b: B, c: C): C & B & A;
export function mergeProps(...items: any[]) {
  function customizer(objValue: any, srcValue: any) {
    return isUndefined(srcValue) ? objValue : srcValue;
  }

  let ret = assign({}, items[0]);
  for (let i = 1; i < items.length; i++) {
    ret = assignWith(ret, items[i], customizer);
  }
  return ret;
}
