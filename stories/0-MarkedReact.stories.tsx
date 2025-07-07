import type { Meta, StoryObj } from '@storybook/react-vite';

import Markdown from '../src/Markdown';
import markdownDetail from './details/default.md?raw';
import markdownCode from './details/default-code.js?raw';
import './marked.css';

const meta: Meta<typeof Markdown> = {
  title: 'Marked React',
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
    openLinksInNewTab: {
      description: 'Attribute `target=_blank` will be added to link elements',
      table: {
        defaultValue: {
          summary: 'true',
        },
      },
    },
    breaks: {
      description: 'Add `br` tag on single line breaks. Requires gfm to be true',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    gfm: {
      description: 'Use approved [Github Flavoured Markdown](https://github.github.com/gfm/)',
      table: {
        defaultValue: {
          summary: 'true',
        },
      },
    },
    baseURL: {
      description: 'A prefix url for any relative link',
      table: {
        defaultValue: {
          summary: '',
        },
      },
    },
    langPrefix: {
      description: 'A string to prefix the className in a <code> block. Useful for syntax highlighting',
      table: {
        defaultValue: {
          summary: 'language-',
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Markdown>;

export const Default: Story = {
  args: {
    value: markdownDetail,
  },
  parameters: {
    docs: {
      source: {
        code: markdownCode,
      },
    },
  },
  render: (args) => <Markdown {...args} />,
};

export const AllProps: Story = {
  ...Default,
  args: {
    value: '# Hello world!',
    openLinksInNewTab: true,
    breaks: false,
    gfm: true,
    baseURL: '',
    langPrefix: 'language-',
  },
};

export const InlineMarkdown: Story = {
  ...Default,
  args: {
    value: 'Hello world!',
    isInline: true,
  },
};
