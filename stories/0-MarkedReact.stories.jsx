import React from 'react';

import Markdown from '../src/Markdown';
import markdownDetail from './details/default.md';
import markdownCode from '!!raw-loader!./details/default-code.js';
import './marked.css';

export default {
  title: 'Marked React',
  component: Markdown,
  argTypes: {
    value: { control: 'text' },
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
