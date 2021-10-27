import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Markdown from 'marked-react';

it('should render nothing if nothing is given', () => {
  const marked = React.createElement(Markdown);
  const html = ReactDOMServer.renderToStaticMarkup(marked);
  expect(html).toBe('');
});

it('should render markdown correctly', () => {
  const marked = React.createElement(Markdown, null, '# Hello world!');
  const html = ReactDOMServer.renderToStaticMarkup(marked);
  expect(html).toBe('<h1>Hello world!</h1>');
});

it('should prefer value over children render markdown correctly', () => {
  const marked = React.createElement(Markdown, { value: 'Hey' }, 'Hello');
  const html = ReactDOMServer.renderToStaticMarkup(marked);
  expect(html).toBe('<p>Hey</p>');
});

it('should throw error if children is not a string', () => {
  const marked = React.createElement(Markdown, null, 1);

  expect(() => {
    ReactDOMServer.renderToStaticMarkup(marked);
  }).toThrowError(new TypeError('[marked-react]: Expected children to be of type string but got number'));
});

it('should throw error if value is not a string', () => {
  const marked = React.createElement(Markdown, { value: 1 });

  expect(() => {
    ReactDOMServer.renderToStaticMarkup(marked);
  }).toThrowError(new TypeError('[marked-react]: Expected value to be of type string but got number'));
});
