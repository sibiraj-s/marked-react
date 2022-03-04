import React from 'react';

import Markdown from '../src/Markdown';
import markdownText from './details/default.md';
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
  value: markdownText,
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
