const htmlUnescapes: Record<string, string> = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'",
  '&nbsp;': ' ',
  '&#160;': ' ',
};

/** Used to match HTML entities and HTML characters. */
const reEscapedHtml = /&(?:amp|lt|gt|quot|nbsp|#(?:0+)?(?:39|160));/g;
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
