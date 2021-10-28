const htmlUnescapes = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'",
};

/** Used to match HTML entities and HTML characters. */
const reEscapedHtml = /&(?:amp|lt|gt|quot|#(?:0+)?39);/g;
const reHasEscapedHtml = RegExp(reEscapedHtml.source);

export const unescape = (string = '') => {
  return reHasEscapedHtml.test(string)
    ? string.replace(reEscapedHtml, (entity) => htmlUnescapes[entity] || "'")
    : string;
};

export const joinBase = (path, base) => {
  if (!base) {
    return path;
  }

  try {
    return new URL(path, base).href;
  } catch {
    return path;
  }
};
