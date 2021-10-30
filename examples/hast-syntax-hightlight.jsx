import { createElement as h } from 'react';
import ReactDOM from 'react-dom';
import Markdown from 'marked-react';
import { toH } from 'hast-to-hyperscript';
import { refractor } from 'refractor';

import javascript from 'refractor/lang/javascript';

refractor.register(javascript);

const renderer = {
  code(snippet, lang) {
    const code = toH(h, refractor.highlight(snippet, lang));
    const pChild = h('code', { className: `language-${lang}` }, code);
    return h('pre', { key: '<uniq>' }, pChild);
  },
};

const markdown = 'console.log("Hello world!")';

const rootEl = document.getElementById('root');
ReactDOM.render(<Markdown value={markdown} renderer={renderer} />, rootEl);
