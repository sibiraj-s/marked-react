import { createElement, Fragment } from 'react';
import { lexer } from 'marked';

import defaults from './defaults';
import ReactParser from './ReactParser';
import ReactRenderer from './ReactRenderer';

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
  const tokens = lexer(props.value ?? props.children ?? '', lexerOptions);

  // parser options
  const parserOptions = {
    renderer: new ReactRenderer({
      renderer: props.renderer,
      baseURL: props.baseURL,
      openLinksInNewTab: props.openLinksInNewTab,
      langPrefix: props.langPrefix,
    }),
  };

  const children = new ReactParser(parserOptions).parse(tokens);

  return createElement(Fragment, null, children);
};

Markdown.defaultProps = defaults;

export default Markdown;
