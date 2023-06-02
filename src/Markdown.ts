import { createElement, Fragment } from 'react';
import { Lexer, marked } from 'marked';

import ReactParser from './ReactParser';
import ReactRenderer, { ReactRendererOptions } from './ReactRenderer';
import { mergeProps } from './helpers'

interface LexerOptions {
  breaks?: marked.MarkedOptions['breaks'];
  gfm?: marked.MarkedOptions['gfm'];
}

export interface MarkdownProps extends ReactRendererOptions, LexerOptions {
  value?: string;
  children?: string;
  isInline?: boolean;
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
}

const Markdown = (p: MarkdownProps) => {
  const props = mergeProps(defaultProps, p);
  validateComponentProps(props);

  // lexer options
  const lexerOptions = {
    breaks: props.breaks,
    gfm: props.gfm,
  };

  // convert input markdown into tokens
  const markdownString = props.value ?? props.children ?? '';
  const tokens = props.isInline
    ? Lexer.lexInline(markdownString, lexerOptions)
    : Lexer.lex(markdownString, lexerOptions);

  // parser options
  const parserOptions = {
    renderer: new ReactRenderer({
      renderer: props.renderer,
      baseURL: props.baseURL,
      openLinksInNewTab: props.openLinksInNewTab,
      langPrefix: props.langPrefix,
    }),
  };

  const parser = new ReactParser(parserOptions);
  const children = props.isInline ? parser.parseInline(tokens) : parser.parse(tokens);

  return createElement(Fragment, null, children);
};

export default Markdown;
