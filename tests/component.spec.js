import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server.js';

import Markdown from '../src/index.js';

it('should render nothing if nothing is given', () => {
  const marked = createElement(Markdown);
  const html = renderToStaticMarkup(marked);
  expect(html).toBe('');
});

it('should render markdown correctly', () => {
  const marked = createElement(Markdown, null, '# Hello world!');
  const html = renderToStaticMarkup(marked);
  expect(html).toBe('<h1>Hello world!</h1>');
});

it('should prefer value over children render markdown correctly', () => {
  const marked = createElement(Markdown, { value: 'Hey' }, 'Hello');
  const html = renderToStaticMarkup(marked);
  expect(html).toBe('<p>Hey</p>');
});

it('should throw error if children is not a string', () => {
  const marked = createElement(Markdown, null, 1);

  expect(() => renderToStaticMarkup(marked)).toThrowError(new TypeError('[marked-react]: Expected children to be of type string but got number'));
});

it('should throw error if value is not a string', () => {
  const marked = createElement(Markdown, { value: 1 });

  expect(() => {
    renderToStaticMarkup(marked);
  }).toThrowError(new TypeError('[marked-react]: Expected value to be of type string but got number'));
});

it('should use custom renderer to render elements', () => {
  const renderer = {
    heading: (node, level) => {
      return createElement(`h${level}`, { key: 'marked-react-custom-header' }, `This is a heading: ${node}`);
    },
  };

  const marked = createElement(Markdown, { value: '# Hello World!', renderer });
  const html = renderToStaticMarkup(marked);
  expect(html).toBe('<h1>This is a heading: Hello World!</h1>');
});
