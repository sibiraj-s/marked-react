import { describe, expect, it } from 'vitest';
import { createElement, ReactElement } from 'react';
import ReactDOMServer from 'react-dom/server';

import ReactRenderer, { RendererMethods } from '../src/ReactRenderer';

interface Case {
  title: string;
  method: RendererMethods;
  args: any[];
  html: string;
  options?: Record<string, any>;
}

const cases: Case[] = [
  {
    title: 'h1 tag',
    method: 'heading',
    args: ['Hello world!', 1],
    html: '<h1>Hello world!</h1>',
  },
  {
    title: 'h6 tag',
    method: 'heading',
    args: ['Hello world!', 6],
    html: '<h6>Hello world!</h6>',
  },
  {
    title: 'p tag',
    method: 'paragraph',
    args: ['Hello world!'],
    html: '<p>Hello world!</p>',
  },
  {
    title: 'a tag',
    method: 'link',
    args: ['https://example.com', 'Example'],
    html: '<a href="https://example.com">Example</a>',
  },
  {
    title: 'img tag',
    method: 'image',
    args: ['https://example.com', 'Example', 'example.com'],
    html: '<img src="https://example.com" alt="Example" title="example.com"/>',
  },
  {
    title: 'code tag',
    method: 'codespan',
    args: ['<script>alert()</script>'],
    html: '<code>&lt;script&gt;alert()&lt;/script&gt;</code>',
  },
  {
    title: 'code tag with language prefix',
    method: 'codespan',
    args: ['<script>alert()</script>', 'js'],
    options: {
      langPrefix: 'language-',
    },
    html: '<code class="language-js">&lt;script&gt;alert()&lt;/script&gt;</code>',
  },
  {
    title: 'pre tag',
    method: 'code',
    args: ['hello', 'js'],
    options: {
      langPrefix: 'language-',
    },
    html: '<pre><code class="language-js">hello</code></pre>',
  },
  {
    title: 'blockquote tag',
    method: 'blockquote',
    args: ['hello'],
    html: '<blockquote>hello</blockquote>',
  },
  {
    title: 'ordered list (ol tag)',
    method: 'list',
    args: ['hello', true],
    html: '<ol>hello</ol>',
  },
  {
    title: 'unordered list (ul tag)',
    method: 'list',
    args: ['hello', false],
    html: '<ul>hello</ul>',
  },
  {
    title: 'list item (li tag)',
    method: 'listItem',
    args: ['hello'],
    html: '<li>hello</li>',
  },
  {
    title: 'checkbox input with default checked',
    method: 'checkbox',
    args: [true],
    html: '<input type="checkbox" disabled="" checked=""/>',
  },
  {
    title: 'checkbox input with default not checked',
    method: 'checkbox',
    args: [false],
    html: '<input type="checkbox" disabled=""/>',
  },
  {
    title: 'table tag',
    method: 'table',
    args: [''],
    html: '<table></table>',
  },
  {
    title: 'thead tag',
    method: 'tableHeader',
    args: [''],
    html: '<thead></thead>',
  },
  {
    title: 'tbody tag',
    method: 'tableBody',
    args: [''],
    html: '<tbody></tbody>',
  },
  {
    title: 'tr tag',
    method: 'tableRow',
    args: [''],
    html: '<tr></tr>',
  },
  {
    title: 'th tag',
    method: 'tableCell',
    args: ['', { header: true }],
    html: '<th></th>',
  },
  {
    title: 'td tag',
    method: 'tableCell',
    args: ['', { header: false }],
    html: '<td></td>',
  },
  {
    title: 'strong tag',
    method: 'strong',
    args: ['hello world'],
    html: '<strong>hello world</strong>',
  },
  {
    title: 'em tag',
    method: 'em',
    args: ['hello world'],
    html: '<em>hello world</em>',
  },
  {
    title: 'del tag',
    method: 'del',
    args: ['hello world'],
    html: '<del>hello world</del>',
  },
  {
    title: 'text',
    method: 'text',
    args: ['hello world'],
    html: 'hello world',
  },
  {
    title: 'html',
    method: 'html',
    args: ['hello world'],
    html: 'hello world',
  },
  {
    title: 'br tag',
    method: 'br',
    args: ['hello world'],
    html: '<br/>',
  },
  {
    title: 'hr tag',
    method: 'hr',
    args: [''],
    html: '<hr/>',
  },
];

describe('ReactRenderer', () => {
  it.each(cases)('should render $title correctly', ({ method, html, args, options = {} }) => {
    const renderer = new ReactRenderer(options);

    const rendered = (renderer as any)[method](...args);
    const result = ReactDOMServer.renderToStaticMarkup(rendered as ReactElement);
    expect(result).toEqual(html.trim());
  });

  it('should override methods correctly', () => {
    const renderer = new ReactRenderer({
      renderer: {
        heading: (children) => createElement('p', {}, children),
      },
    });

    const rendered = renderer.heading('hello world', 1);
    const result = ReactDOMServer.renderToStaticMarkup(rendered);
    expect(result).toEqual('<p>hello world</p>');
  });

  it('should do nothing for unknown renderer methods', () => {
    const customRenderer = {
      unknown: () => createElement('a'),
    };

    const renderer = new ReactRenderer({
      renderer: customRenderer as any,
    });

    expect(() => (renderer as any).unknown()).toThrow();
  });
});
