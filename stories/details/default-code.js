import ReactDOM from 'react-dom';
import Markdown from 'marked-react';

const markdown = '# Hello world!';

const rootEl = document.getElementById('root');
ReactDOM.render(<Markdown value={markdown} />, rootEl);
