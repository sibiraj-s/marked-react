import { it, expect, describe } from 'vitest';

import { joinBase, unescape } from '../src/helpers';

describe('Helpers', () => {
  it('should joinBase correctly', () => {
    expect(joinBase('/path', 'https://c.com')).toBe('https://c.com/path');
    expect(joinBase('/path')).toBe('/path');
    expect(joinBase('/path', 'http:')).toBe('/path');
  });

  it('should unescape strings', () => {
    expect(unescape('&amp;')).toBe('&');
    expect(unescape('&lt;')).toBe('<');
    expect(unescape('&gt;')).toBe('>');
    expect(unescape('&quot;')).toBe('"');
    expect(unescape('&#39;')).toBe("'");
    expect(unescape('')).toBe('');
    expect(unescape()).toBe('');
  });
});
