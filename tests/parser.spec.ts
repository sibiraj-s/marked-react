import { describe, expect, it } from 'vitest';
import { Token } from 'marked';

import ReactParser from '../src/ReactParser';
import ReactRenderer from '../src/ReactRenderer';

const renderer = new ReactRenderer({
  openLinksInNewTab: true,
});

const parser = new ReactParser({ renderer });

describe('ReactParser', () => {
  it('should initialize the parser correctly', () => {
    expect(parser.parse).toBeInstanceOf(Function);
    expect(parser.parseInline).toBeInstanceOf(Function);
    expect(parser.renderer).toBeInstanceOf(Object);
  });

  it('should use the given renderer', () => {
    expect(parser.renderer).toEqual(renderer);
  });

  it('should parse text', () => {
    const tokens: Token[] = [
      {
        type: 'text',
        text: 'Hello world!',
        raw: 'Hello world!',
      },
    ];

    const parsed = parser.parse(tokens as Token[]);
    expect(parsed.length).toBe(1);
    expect(parsed[0]).toEqual('Hello world!');
  });

  it('should parse html', () => {
    const tokens: Token[] = [
      {
        type: 'html',
        text: 'Hello world!',
        raw: 'Hello world!',
      },
    ];

    const parsed = parser.parse(tokens);
    expect(parsed.length).toBe(1);
    expect(parsed[0]).toEqual('Hello world!');

    const inlineParsed = parser.parseInline(tokens);
    expect(inlineParsed.length).toBe(1);
    expect(inlineParsed[0]).toEqual('Hello world!');
  });

  it('should parse escape token', () => {
    const tokens = [
      {
        type: 'escape',
        text: '\\',
        raw: '\\',
      },
    ];
    const inlineParsed = parser.parseInline(tokens);
    expect(inlineParsed.length).toBe(1);
    expect(inlineParsed[0]).toEqual('\\');
  });

  it('should do return null for unknown tokens', () => {
    const tokens = [
      {
        type: 'unknown_token',
      },
    ];

    const parsed = parser.parse(tokens as Token[]);
    expect(parsed[0]).toEqual(null);
    const inlineParsed = parser.parseInline(tokens as Token[]);
    expect(inlineParsed[0]).toEqual(null);
  });
});
