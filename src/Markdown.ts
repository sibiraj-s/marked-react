import { createElement, Fragment } from 'react';
import { Marked, MarkedOptions } from 'marked';

import ReactParser from './ReactParser';
import ReactRenderer, { ReactRendererOptions } from './ReactRenderer';

type LexerOptions = Pick<MarkedOptions, 'breaks' | 'gfm'>;

export interface MarkdownProps extends ReactRendererOptions, LexerOptions {
  value?: string;
  children?: string;
  isInline?: boolean;
  instance?: Marked;
}

const validateComponentProps = (props: MarkdownProps) => {
  if (props.value && typeof props.value !== 'string') {
    throw new TypeError(`[marked-react]: Expected value to be of type string but got ${typeof props.value}`);
  }

  if (props.children && typeof props.children !== 'string') {
    throw new TypeError(`[marked-react]: Expected children to be of type string but got ${typeof props.children}`);
  }
};

const defaultProps = {
  isInline: false,
  breaks: false,
  gfm: true,
  baseURL: undefined,
  openLinksInNewTab: true,
  langPrefix: 'language-',
  renderer: undefined,
};

const markedInstance = new Marked();

const Markdown = (props: MarkdownProps) => {
  validateComponentProps(props);

  const options = { ...defaultProps, ...props };
  const marked = options.instance ?? markedInstance;

  // lexer options
  const lexerOptions = {
    breaks: options.breaks,
    gfm: options.gfm,
  };

  // convert input markdown into tokens
  const markdownString = options.value ?? options.children ?? '';

  const tokens = options.isInline
    ? marked.Lexer.lexInline(markdownString, lexerOptions)
    : marked.lexer(markdownString, lexerOptions);

  // parser options
  const parserOptions = {
    renderer: new ReactRenderer({
      renderer: options.renderer,
      baseURL: options.baseURL,
      openLinksInNewTab: options.openLinksInNewTab,
      langPrefix: options.langPrefix,
    }),
  };

  const parser = new ReactParser(parserOptions);
  const children = options.isInline ? parser.parseInline(tokens) : parser.parse(tokens);

  return createElement(Fragment, null, children);
};

export default Markdown;
