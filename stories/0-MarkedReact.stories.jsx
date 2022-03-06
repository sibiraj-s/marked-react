import React from 'react';

import Markdown from '../src/Markdown';
import markdownDetail from './details/default.md';
import markdownCode from '!!raw-loader!./details/default-code.js';
import './marked.css';

export default {
  title: 'Marked React',
  component: Markdown,
  argTypes: {
    value: {
      description: 'Markdown content',
      control: 'text',
      defaultValue: {
        summary: '',
      },
    },
    openLinksInNewTab: {
      description: 'Attribute `target=_blank` will be added to link elements',
      defaultValue: {
        summary: 'true',
      },
    },
    breaks: {
      description: 'Add `br` tag on single line breaks. Requires gfm to be true',
      defaultValue: {
        summary: 'false',
      },
    },
    gfm: {
      description: 'Use approved [Github Flavoured Markdown](https://github.github.com/gfm/)',
      defaultValue: {
        summary: 'true',
      },
    },
    baseURL: {
      description: 'A prefix url for any relative link',
      defaultValue: {
        summary: '',
      },
    },
    langPrefix: {
      description: 'A string to prefix the className in a <code> block. Useful for syntax highlighting',
      defaultValue: {
        summary: 'language-',
      },
    },
  },
};

const Template = (args) => <Markdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: markdownDetail,
};

Default.parameters = {
  docs: {
    source: {
      code: markdownCode,
    },
  },
};

export const AllProps = Template.bind({});
AllProps.args = {
  value: '# Hello world!',
  openLinksInNewTab: true,
  breaks: false,
  gfm: true,
  baseURL: '',
  langPrefix: 'language-',
};

AllProps.parameters = Default.parameters;
