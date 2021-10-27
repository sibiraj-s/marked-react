import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Markdown from 'marked-react';

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
      options: {
        openLinksInNewTab: true,
      },
    },
  },
  {
    title: 'render links without target=_blank',
    markdown: '[Google](https://google.com)',
    html: '<p><a href="https://google.com">Google</a></p>',
    props: {
      options: {
        openLinksInNewTab: false,
      },
    },
  },
  {
    title: 'add base url to the links for relative paths',
    markdown: '[Google](file)',
    html: '<p><a href="https://google.com/file">Google</a></p>',
    props: {
      options: {
        baseURL: 'https://google.com',
        openLinksInNewTab: false,
      },
    },
  },
  {
    title: 'should render images',
    markdown: '![Random Image](https://placeholder.com/pic.png)',
    html: '<p><img src="https://placeholder.com/pic.png" alt="Random Image"/></p>',
  },
  {
    title: 'should render image src with baseURL',
    markdown: '![Random Image](pic.png)',
    html: '<p><img src="https://placeholder.com/pic.png" alt="Random Image"/></p>',
    props: {
      options: {
        baseURL: 'https://placeholder.com',
      },
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
    title: 'render codeblocks',
    markdown: '```\n<script>console.log("Hello")</script>\n```',
    html: '<pre><code>&lt;script&gt;console.log(&quot;Hello&quot;)&lt;/script&gt;</code></pre>',
  },
  {
    title: 'render codeblocks with lang code',
    markdown: '```js\nconsole.log("Hello world!")\n```',
    html: '<pre><code class="language-js">console.log(&quot;Hello world!&quot;)</code></pre>',
  },
  {
    title: 'render codeblocks with given lang prefix',
    markdown: '```js\nconsole.log("Hello world!")\n```',
    html: '<pre><code class="lang-js">console.log(&quot;Hello world!&quot;)</code></pre>',
    props: {
      options: {
        langPrefix: 'lang-',
      },
    },
  },
  {
    title: 'should render strong',
    markdown: '**hey there**',
    html: '<p><strong>hey there</strong></p>',
  },
  {
    title: 'should render em',
    markdown: '*hey there*',
    html: '<p><em>hey there</em></p>',
  },
  {
    title: 'should render del',
    markdown: '~hey there~',
    html: '<p><del>hey there</del></p>',
  },
  {
    title: 'should render codespan',
    markdown: '`hey there`',
    html: '<p><code>hey there</code></p>',
  },
  {
    title: 'should html without any changes',
    markdown: '<div>hello world!</div>',
    html: '&lt;div&gt;hello world!&lt;/div&gt;',
  },
  {
    title: 'should render horizontal rule',
    markdown: '---',
    html: '<hr/>',
  },
  {
    title: 'should render table',
    markdown: '|Head|\n|--|\n|Body|',
    html: '<table><thead><tr><th>Head</th></tr></thead><tbody><tr><td>Body</td></tr></tbody></table>',
  },
  {
    title: 'should render br tag',
    markdown: 'Hello\nWorld!\n',
    html: '<p>Hello<br/>World!</p>',
    props: {
      options: {
        breaks: true,
        gfm: true,
      },
    },
  },
  {
    title: 'should render nothing for just line breaks',
    markdown: '\n\n\n',
    html: '',
  },
  {
    title: 'should parse images inside links',
    markdown: '[![Tests](https://p.com/i.png)](https://p.com)',
    html: '<p><a href="https://p.com" target="_blank"><img src="https://p.com/i.png" alt="Tests"/></a></p>',
  },
];

test.each(cases)('should $title', ({ markdown, html, props = null }) => {
  const marked = React.createElement(Markdown, props, markdown);
  const result = ReactDOMServer.renderToStaticMarkup(marked);
  expect(result).toEqual(html.trim());
});
