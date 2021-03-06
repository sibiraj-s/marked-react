import ReactDOM from 'react-dom';
import { createElement } from 'react';
import Markdown from 'marked-react';

const renderer = {
  heading(text, level) {
    if (level === 1) {
      return <h2 key={this.elementId}>{text}</h2>;
    }

    return createElement(`h${level}`, { key: this.elementId }, text);
  },
};

const markdown = '# Hello world!';

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(<Markdown value={markdown} renderer={renderer} />);
