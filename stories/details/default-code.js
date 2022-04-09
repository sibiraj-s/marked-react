import ReactDOM from 'react-dom';
import Markdown from 'marked-react';

const markdown = '# Hello world!';

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(<Markdown value={markdown} />);
