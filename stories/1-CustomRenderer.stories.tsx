import { ComponentStory, ComponentMeta } from '@storybook/react';
import { createElement } from 'react';
import Lowlight from 'react-lowlight';
import javascript from 'highlight.js/lib/languages/javascript';

import Markdown from '../src/Markdown';
import switchComponentDetail from './details/switch-component.md';
import switchComponentCode from '!!raw-loader!./details/switch-component-code.js';
import syntaxHightlightDetail from './details/syntax-highlight.md';
import syntaxHightlightCode from '!!raw-loader!./details/syntax-highlight-code.js';

import './marked.css';
import 'highlight.js/styles/atom-one-light.css';

Lowlight.registerLanguage('js', javascript);

export default {
  title: 'Marked React/Custom Renderer',
  component: Markdown,
  argTypes: {
    value: {
      description: 'Markdown content',
      control: 'text',
      table: {
        defaultValue: {
          summary: '',
        },
      },
    },
    renderer: {
      description: 'Custom renderer object to override default renderer',
      control: false,
    },
  },
} as ComponentMeta<typeof Markdown>;

const Template:ComponentStory<typeof Markdown> = (args) => <Markdown {...args} />;

export const SwitchComponents = Template.bind({});
export const SyntaxHighlight = Template.bind({});

SwitchComponents.args = {
  value: switchComponentDetail,
  renderer: {
    heading(text, level) {
      if (level === 1) {
        return <h2 key={this.elementId}>{text}</h2>;
      }

      return createElement(`h${level}`, { key: this.elementId }, text);
    },
  },
};

SwitchComponents.parameters = {
  docs: {
    source: {
      code: switchComponentCode,
    },
  },
};

SyntaxHighlight.args = {
  value: syntaxHightlightDetail,
  renderer: {
    code(snippet, lang) {
      return <Lowlight language={lang} value={snippet} key={this.elementId} />;
    },
  },
};

SyntaxHighlight.parameters = {
  docs: {
    source: {
      code: syntaxHightlightCode,
    },
  },
};
