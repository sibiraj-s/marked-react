import { createElement, Fragment } from 'react';
import { lexer } from 'marked';

import ReactParser, { defaultParserOptions } from './ReactParser';

const defaultLexerOptions = {
  breaks: false,
  gfm: true,
};

const defaultOptions = {
  ...defaultLexerOptions,
  ...defaultParserOptions,
};

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

  // assign default options
  const options = { ...defaultOptions, ...props.options };

  // lexer options
  const lexerOptions = {
    breaks: options.breaks,
    gfm: options.gfm,
  };

  // convert input markdown into tokens
  const tokens = lexer(props.value ?? props.children ?? '', lexerOptions);

  // parser options
  const parserOptions = {
    baseURL: options.baseURL,
    openLinksInNewTab: options.openLinksInNewTab,
    langPrefix: options.langPrefix,
  };

  const children = new ReactParser(parserOptions).parse(tokens);

  return createElement(Fragment, null, children);
};

Markdown.defaultProps = {
  options: defaultOptions,
};

export default Markdown;
