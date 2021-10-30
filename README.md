# marked-react

> Render Markdown as React components using [marked].

[![Tests](https://github.com/sibiraj-s/marked-react/actions/workflows/tests.yml/badge.svg)](https://github.com/sibiraj-s/marked-react/actions/workflows/tests.yml)
[![Version](https://badgen.net/npm/v/marked-react)](https://npmjs.com/marked-react)
[![License](https://badgen.net/npm/license/marked-react)](https://github.com/sibiraj-s/marked-react/blob/master/LICENSE)
[![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/sibiraj-s/marked-react)

## TL;DR

- Uses [marked](https://marked.js.org/) to parse markdown
- Renders actual react elements instead of using `dangerouslySetInnerHTML`

[Demo]

## Installation

```bash
$ npm i marked-react
```

### Usage

```js
import ReactDOM from 'react-dom';
import Markdown from 'marked-react';

const rootEl = document.getElementById('root');
ReactDOM.render(<Markdown># Hello world!</Markdown>, rootEl);
```

### Component Props

- **value[`string`]** - Markdown content.
- **baseURL** [`string`] - A prefix url for any relative link.
- **openLinksInNewTab** [`boolean`] - Attribute `target=_blank` will be added to link elements
- **langPrefix** [`string`] - A string to prefix the className in a `<code>` block. Useful for syntax highlighting. Defaults to `language-`.
- **breaks** [`boolean`] - Add `br` tag on single line breaks. Requires `gfm` to be `true`
- **gfm** [`boolean`] - Use approved [Github Flavoured Markdown](https://github.github.com/gfm/)

### Syntax highlight code blocks

There are some awesome options available to highlight code

- [react-syntax-highlighter]
- [react-lowlight]
- [react-refractor]

An example with [react-lowlight]

```js
import ReactDOM from 'react-dom';
import Markdown from 'marked-react';
import Lowlight from 'react-lowlight';
import javascript from 'highlight.js/lib/languages/javascript';

Lowlight.registerLanguage('js', javascript);

const renderer = {
  code: (code, lang) => {
    return <Lowlight language={lang} value={code} />;
  },
};

const markdown = 'console.log("Hello world!")';

const rootEl = document.getElementById('root');
ReactDOM.render(<Markdown value={markdown} renderer={renderer} />, rootEl);
```

[marked]: https://marked.js.org/
[demo]: https://sibiraj-s.github.io/marked-react/
[react-lowlight]: https://github.com/rexxars/react-lowlight
[react-refractor]: https://github.com/rexxars/react-refractor
[react-syntax-highlighter]: https://github.com/react-syntax-highlighter/react-syntax-highlighter
