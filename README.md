# marked-react

> Render Markdown as React components using [marked](https://marked.js.org/).

## TL;DR

- Uses [marked](https://marked.js.org/) to parse markdown
- Renders actual react elements instead of using `dangerouslySetInnerHTML`

## Installation

```bash
$ npm i marked-react
```

If you are using `npm >=7`, peerDependencies are installed automatically. For other package managers
you might want to install `marked` manually

```bash
$ yarn add marked marked-react
```

### Usage

```js
import ReactDom from 'react-dom';
import Markdown from 'marked-react';

const rootEl = document.getElementById('root');

ReactDom.render(<Markdown># Hello world!</Markdown>, rootEl);
```

### Component Props

- **value** - A markdown string(markdown).
- **options** - See [Options](#Options)

### Options

- **baseURL** [`string`] - A prefix url for any relative link.
- **openLinksInNewTab** [`boolean`] - Attribute `target=_blank` will be added to link elements
- **langPrefix** [`string`] - A string to prefix the className in a `<code>` block. Useful for syntax highlighting. Defaults to `language-`.
- **breaks** [`boolean`] - Add `br` tag on single line breaks. Requires `gfm` to be `true`
- **gfm** [`boolean`] - Use approved [Github Flavoured Markdown](https://github.github.com/gfm/)
