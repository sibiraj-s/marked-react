import { useState } from 'react';

import Markdown from '../src';
import readme from '../README.md?raw';

const App = () => {
  const [markdownText, setMarkdownText] = useState(readme);

  const handleChange = (e) => {
    setMarkdownText(e.target.value);
  };

  return (
    <div className='Wrapper'>
      <div className='Container'>
        <textarea value={markdownText} onChange={handleChange} spellCheck='false' />
      </div>
      <div className='Container Output'>
        <Markdown value={markdownText} />
      </div>
    </div>
  );
};

export default App;
