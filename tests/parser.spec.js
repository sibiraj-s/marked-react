import { describe, expect, it } from '@jest/globals';
import ReactParser from '../src/ReactParser';

describe('ReactParser', () => {
  it('should initialize the parser correctly', () => {
    const parser = new ReactParser();

    expect(parser.parse).toBeInstanceOf(Function);
    expect(parser.parseInline).toBeInstanceOf(Function);
    expect(parser.renderer).toBeInstanceOf(Object);
  });

  it('should use the given renderer', () => {
    const renderer = {};
    const parser = new ReactParser({
      renderer,
    });

    expect(parser.renderer).toEqual(renderer);
  });

  it('should parse text', () => {
    const parser = new ReactParser();

    const tokens = [
      {
        type: 'text',
        text: 'Hello world!',
      },
    ];

    const parsed = parser.parse(tokens);
    expect(parsed.length).toBe(1);
    expect(parsed[0]).toEqual('Hello world!');
  });

  it('should parse html', () => {
    const parser = new ReactParser();

    const tokens = [
      {
        type: 'html',
        text: 'Hello world!',
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
    const parser = new ReactParser();

    const tokens = [
      {
        type: 'escape',
        text: '\\',
      },
    ];
    const inlineParsed = parser.parseInline(tokens);
    expect(inlineParsed.length).toBe(1);
    expect(inlineParsed[0]).toEqual('\\');
  });

  it('should do return null for unknown tokens', () => {
    const parser = new ReactParser();

    const tokens = [
      {
        type: 'unknown_token',
      },
    ];

    const parsed = parser.parse(tokens);
    expect(parsed[0]).toEqual(null);
    const inlineParsed = parser.parseInline(tokens);
    expect(inlineParsed[0]).toEqual(null);
  });
});
