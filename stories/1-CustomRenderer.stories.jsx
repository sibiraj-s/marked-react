import React, { createElement } from 'react';
import Lowlight from 'react-lowlight';
import javascript from 'highlight.js/lib/languages/javascript';

import Markdown from '../src/Markdown';
import markdownText from './markdown.md';
import codeblockMarkdownText from './codeblock.md';
import './marked.css';
import 'highlight.js/styles/default.css';

Lowlight.registerLanguage('js', javascript);

export default {
  title: 'Marked React/Custom Renderer',
  component: Markdown,
  argTypes: {
    value: {
      control: 'text',
    },
    renderer: {
      control: { disable: true },
    },
  },
};

const Template = (args) => <Markdown {...args} />;

export const SwitchComponents = Template.bind({});
export const SyntaxHighlight = Template.bind({});

SwitchComponents.args = {
  value: markdownText,
  renderer: {
    heading(text, level) {
      if (level === 1) {
        return <h2 key={this.elementId}>{text}</h2>;
      }

      return createElement(`h${level}`, { key: this.elementId }, text);
    },
  },
};

SyntaxHighlight.args = {
  value: codeblockMarkdownText,
  renderer: {
    code(snippet, lang) {
      return <Lowlight language={lang} value={snippet} key={this.elementId} />;
    },
  },
};
