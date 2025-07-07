import type { Meta, StoryObj } from '@storybook/react-vite';
import { createElement } from 'react';
import Lowlight from 'react-lowlight';
import javascript from 'highlight.js/lib/languages/javascript';

import Markdown from '../src/Markdown';
import switchComponentDetail from './details/switch-component.md?raw';
import switchComponentCode from './details/switch-component-code.js?raw';
import syntaxHightlightDetail from './details/syntax-highlight.md?raw';
import syntaxHightlightCode from './details/syntax-highlight-code.js?raw';

import './marked.css';
import 'highlight.js/styles/atom-one-light.css';

Lowlight.registerLanguage('js', javascript);

const meta: Meta<typeof Markdown> = {
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
};

export default meta;
type Story = StoryObj<typeof Markdown>;

export const SwitchComponents: Story = {
  args: {
    value: switchComponentDetail,
    renderer: {
      heading(text, level) {
        if (level === 1) {
          return <h2 key={this.elementId}>{text}</h2>;
        }

        return createElement(`h${level}`, { key: this.elementId }, text);
      },
    },
  },
  parameters: {
    docs: {
      source: {
        code: switchComponentCode,
      },
    },
  },
  render: (args) => <Markdown {...args} />,
};

export const SyntaxHighlight: Story = {
  args: {
    value: syntaxHightlightDetail,
    renderer: {
      code(snippet, lang) {
        return <Lowlight language={lang} value={snippet} key={this.elementId} />;
      },
    },
  },
  parameters: {
    docs: {
      source: {
        code: syntaxHightlightCode,
      },
    },
  },
  render: (args) => <Markdown {...args} />,
};
