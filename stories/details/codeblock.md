# Syntax highlight code blocks

An example with [react-lowlight]

```js
import ReactDOM from 'react-dom';
import Markdown from 'marked-react';
import Lowlight from 'react-lowlight';
import javascript from 'highlight.js/lib/languages/javascript';

Lowlight.registerLanguage('js', javascript);

const renderer = {
  code(snippet, lang) {
    return <Lowlight language={lang} value={snippet} />;
  },
};

const markdown = 'console.log("Hello world!")';

const rootEl = document.getElementById('root');
ReactDOM.render(<Markdown value={markdown} renderer={renderer} />, rootEl);
```

Some awesome options available to highlight code

- [react-syntax-highlighter]
- [react-lowlight]
- [react-refractor]

[react-lowlight]: https://github.com/rexxars/react-lowlight
[react-refractor]: https://github.com/rexxars/react-refractor
[react-syntax-highlighter]: https://github.com/react-syntax-highlighter/react-syntax-highlighter
