import { createElement, Fragment } from 'react';
import { Lexer } from 'marked';

import ReactParser from './ReactParser.js';
import ReactRenderer from './ReactRenderer.js';

const validateComponentProps = (props) => {
  if (props.value && typeof props.value !== 'string') {
    throw new TypeError(`[marked-react]: Expected value to be of type string but got ${typeof props.value}`);
  }

  if (props.children && typeof props.children !== 'string') {
    throw new TypeError(`[marked-react]: Expected children to be of type string but got ${typeof props.children}`);
  }
};

const Markdown = (props) => {
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
  const children = props.isInline
    ? parser.parseInline(tokens)
    : parser.parse(tokens);

  return createElement(Fragment, null, children);
};

Markdown.defaultProps = {
  isInline: false,
  breaks: false,
  gfm: true,
  baseURL: null,
  openLinksInNewTab: true,
  langPrefix: 'language-',
  renderer: null,
};

export default Markdown;
