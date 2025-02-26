import { test, expect, describe } from 'vitest';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Markdown from '../src/index';

const cases = [
  {
    title: 'render simple markdown',
    markdown: 'Hello world!',
    html: '<p>Hello world!</p>',
  },
  {
    title: 'render level 1 heading',
    markdown: '# Hello world!',
    html: '<h1>Hello world!</h1>',
  },
  {
    title: 'render level 2 heading',
    markdown: '## Hello world!',
    html: '<h2>Hello world!</h2>',
  },
  {
    title: 'render level 6 heading',
    markdown: '###### Hello world!',
    html: '<h6>Hello world!</h6>',
  },
  {
    title: 'render blocquotes',
    markdown: '> inside quote',
    html: '<blockquote><p>inside quote</p></blockquote>',
  },
  {
    title: 'render inline elements inside blocquotes',
    markdown: '> inside *quote*',
    html: '<blockquote><p>inside <em>quote</em></p></blockquote>',
  },
  {
    title: 'render links',
    markdown: '[Google](https://google.com)',
    html: '<p><a href="https://google.com" target="_blank">Google</a></p>',
  },
  {
    title: 'render links with target=_blank',
    markdown: '[Google](https://google.com)',
    html: '<p><a href="https://google.com" target="_blank">Google</a></p>',
    props: {
      openLinksInNewTab: true,
    },
  },
  {
    title: 'render links without target=_blank',
    markdown: '[Google](https://google.com)',
    html: '<p><a href="https://google.com">Google</a></p>',
    props: {
      openLinksInNewTab: false,
    },
  },
  {
    title: 'add base url to the links for relative paths',
    markdown: '[Google](file)',
    html: '<p><a href="https://google.com/file">Google</a></p>',
    props: {
      baseURL: 'https://google.com',
      openLinksInNewTab: false,
    },
  },
  {
    title: 'render images',
    markdown: '![Random Image](https://placeholder.com/pic.png)',
    // react 19, adds link rel="preload" as="image"
    html: '<link rel="preload" as="image" href="https://placeholder.com/pic.png"/><p><img src="https://placeholder.com/pic.png" alt="Random Image"/></p>',
  },
  {
    title: 'render image src with baseURL',
    markdown: '![Random Image](pic.png)',
    // react 19, adds link rel="preload" as="image"
    html: '<link rel="preload" as="image" href="https://placeholder.com/pic.png"/><p><img src="https://placeholder.com/pic.png" alt="Random Image"/></p>',
    props: {
      baseURL: 'https://placeholder.com',
    },
  },
  {
    title: 'render unordered lists',
    markdown: '- option-1\n- option-2',
    html: '<ul><li>option-1</li><li>option-2</li></ul>',
  },
  {
    title: 'render ordered lists',
    markdown: '1. option-1\n2. option-2',
    html: '<ol><li>option-1</li><li>option-2</li></ol>',
  },
  {
    title: 'render ordered lists with different start value',
    markdown: '2. option-2\n3. option-3',
    html: '<ol start="2"><li>option-2</li><li>option-3</li></ol>',
  },
  {
    title: 'render codeblocks',
    markdown: '```\n<script>console.log("Hello")</script>\n```',
    html: '<pre><code>&lt;script&gt;console.log(&quot;Hello&quot;)&lt;/script&gt;</code></pre>',
  },
  {
    title: 'render codeblocks with default lang prefix',
    markdown: '```js\nconsole.log("Hello world!")\n```',
    html: '<pre><code class="language-js">console.log(&quot;Hello world!&quot;)</code></pre>',
  },
  {
    title: 'render codeblocks with given lang prefix',
    markdown: '```js\nconsole.log("Hello world!")\n```',
    html: '<pre><code class="lang-js">console.log(&quot;Hello world!&quot;)</code></pre>',
    props: {
      langPrefix: 'lang-',
    },
  },
  {
    title: 'render strong',
    markdown: '**hey there**',
    html: '<p><strong>hey there</strong></p>',
  },
  {
    title: 'render em',
    markdown: '*hey there*',
    html: '<p><em>hey there</em></p>',
  },
  {
    title: 'render del',
    markdown: '~hey there~',
    html: '<p><del>hey there</del></p>',
  },
  {
    title: 'render codespan',
    markdown: '`hey there`',
    html: '<p><code>hey there</code></p>',
  },
  {
    title: 'html without any changes',
    markdown: '<div>hello world!</div>',
    html: '&lt;div&gt;hello world!&lt;/div&gt;',
  },
  {
    title: 'render horizontal rule',
    markdown: '---',
    html: '<hr/>',
  },
  {
    title: 'render table',
    markdown: '|Head|\n|--|\n|Body|',
    html: '<table><thead><tr><th>Head</th></tr></thead><tbody><tr><td>Body</td></tr></tbody></table>',
  },
  {
    title: 'render br tag',
    markdown: 'Hello\nWorld!\n',
    html: '<p>Hello<br/>World!</p>',
    props: {
      breaks: true,
      gfm: true,
    },
  },
  {
    title: 'render nothing for just line breaks',
    markdown: '\n\n\n',
    html: '',
  },
  {
    title: 'parse images inside links',
    markdown: '[![Tests](https://p.com/i.png)](https://p.com)',
    // react 19, adds link rel="preload" as="image"
    html: '<link rel="preload" as="image" href="https://p.com/i.png"/><p><a href="https://p.com" target="_blank"><img src="https://p.com/i.png" alt="Tests"/></a></p>',
  },
  {
    title: 'render task list correctly',
    markdown: '- [x] checked\n- [ ] unchecked',
    html: '<ul><li><input type="checkbox" disabled="" checked=""/>checked</li><li><input type="checkbox" disabled=""/>unchecked</li></ul>',
  },
  {
    title: 'not render task list with gfm disabled',
    markdown: '- [x] checked\n- [ ] unchecked',
    html: '<ul><li>[x] checked</li><li>[ ] unchecked</li></ul>',
    props: {
      gfm: false,
    },
  },
];

describe('MarkedReact', () => {
  test.each(cases)('should $title', ({ markdown, html, props = null }) => {
    const marked = React.createElement(Markdown, props, markdown);
    const result = ReactDOMServer.renderToStaticMarkup(marked);
    expect(result).toEqual(html.trim());
  });
});
