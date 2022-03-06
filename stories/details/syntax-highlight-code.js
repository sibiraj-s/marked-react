import ReactDOM from 'react-dom';
import Markdown from 'marked-react';
import Lowlight from 'react-lowlight';
import javascript from 'highlight.js/lib/languages/javascript';

import 'highlight.js/styles/default.css';

Lowlight.registerLanguage('js', javascript);

const renderer = {
  code(snippet, lang) {
    return <Lowlight language={lang} value={snippet} />;
  },
};

const markdown = 'console.log("Hello world!")';

const rootEl = document.getElementById('root');
ReactDOM.render(<Markdown value={markdown} renderer={renderer} />, rootEl);
