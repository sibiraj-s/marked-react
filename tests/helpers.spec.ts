import { it, expect, describe } from 'vitest';

import { joinBase, unescape } from '../src/helpers';

describe('Helpers', () => {
  it('should joinBase correctly', () => {
    expect(joinBase('/path', 'https://c.com')).toBe('https://c.com/path');
    expect(joinBase('/path')).toBe('/path');
    expect(joinBase('/path', 'http:')).toBe('/path');
  });

  it('should unescape basic entities', () => {
    expect(unescape('&amp;')).toBe('&');
    expect(unescape('&lt;')).toBe('<');
    expect(unescape('&gt;')).toBe('>');
    expect(unescape('&quot;')).toBe('"');
    expect(unescape('&#39;')).toBe("'");
  });

  it('should unescape named entities', () => {
    expect(unescape('&nbsp;')).toBe('\u00A0');
    expect(unescape('&copy;')).toBe('©');
    expect(unescape('&reg;')).toBe('®');
    expect(unescape('&trade;')).toBe('™');
    expect(unescape('&euro;')).toBe('€');
  });

  it('should unescape numeric character references', () => {
    expect(unescape('&#64;')).toBe('@');
    expect(unescape('&#8364;')).toBe('€');
    expect(unescape('&#x40;')).toBe('@');
    expect(unescape('&#x20AC;')).toBe('€');
    expect(unescape('&#160;')).toBe('\u00A0');
  });

  it('should unescape exotic entities', () => {
    expect(unescape('&hearts;')).toBe('♥');
    expect(unescape('&spades;')).toBe('♠');
    expect(unescape('&clubs;')).toBe('♣');
    expect(unescape('&diams;')).toBe('♦');
    expect(unescape('&alpha;')).toBe('α');
    expect(unescape('&beta;')).toBe('β');
    expect(unescape('&gamma;')).toBe('γ');
    expect(unescape('&pi;')).toBe('π');
    expect(unescape('&sum;')).toBe('∑');
    expect(unescape('&infin;')).toBe('∞');
    expect(unescape('&asymp;')).toBe('≈');
    expect(unescape('&ne;')).toBe('≠');
    expect(unescape('&le;')).toBe('≤');
    expect(unescape('&ge;')).toBe('≥');
  });

  it('should handle edge cases', () => {
    expect(unescape('Tom &amp; Jerry &lt;div&gt;')).toBe('Tom & Jerry <div>');
    expect(unescape('')).toBe('');
    expect(unescape()).toBe('');
    expect(unescape('No entities here')).toBe('No entities here');
    expect(unescape('Just & ampersand')).toBe('Just & ampersand');
  });
});
