# marked-react

> Render Markdown as React components using [marked].

[![Tests](https://github.com/sibiraj-s/marked-react/actions/workflows/tests.yml/badge.svg)](https://github.com/sibiraj-s/marked-react/actions/workflows/tests.yml)
[![Version](https://badgen.net/npm/v/marked-react)](https://npmjs.com/marked-react)
[![License](https://badgen.net/npm/license/marked-react)](https://github.com/sibiraj-s/marked-react/blob/master/LICENSE)

## TL;DR

- Uses [marked](https://marked.js.org/) to parse markdown
- Renders actual react elements instead of using `dangerouslySetInnerHTML`
- HTML in markdown is rendered as plain text

[Demo]

## Installation

```bash
$ npm i marked-react
```

## Usage

```js
import ReactDOM from 'react-dom';
import Markdown from 'marked-react';

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(<Markdown># Hello world!</Markdown>);
```

### Component Props

- **value**[`string`] - Markdown content.
- **baseURL** [`string`] - A prefix url for any relative link.
- **openLinksInNewTab** [`boolean`] - Attribute `target=_blank` will be added to link elements
- **langPrefix** [`string`] - A string to prefix the className in a `<code>` block. Useful for syntax highlighting. Defaults to `language-`.
- **breaks** [`boolean`] - Add `br` tag on single line breaks. Requires `gfm` to be `true`
- **gfm** [`boolean`] - Use approved [Github Flavoured Markdown](https://github.github.com/gfm/)
- **isInline**[`boolean`] - Parse [inline](https://marked.js.org/using_advanced#inline) markdown.

## Syntax highlight code blocks

An example with [react-lowlight]

```js
import ReactDOM from 'react-dom';
import Markdown from 'marked-react';
import Lowlight from 'react-lowlight';
import javascript from 'highlight.js/lib/languages/javascript';

Lowlight.registerLanguage('js', javascript);

const renderer = {
  code(snippet, lang) {
    return <Lowlight key={this.elementId} language={lang} value={snippet} />;
  },
};

const markdown = 'console.log("Hello world!")';

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(<Markdown value={markdown} renderer={renderer} />);
```

Some awesome options available to highlight code

- [react-syntax-highlighter]
- [react-lowlight]
- [react-refractor]

[marked]: https://marked.js.org/
[demo]: https://sibiraj-s.github.io/marked-react/
[react-lowlight]: https://github.com/rexxars/react-lowlight
[react-refractor]: https://github.com/rexxars/react-refractor
[react-syntax-highlighter]: https://github.com/react-syntax-highlighter/react-syntax-highlighter
