declare module 'marked-react' {
  import React from 'react';

  export interface MarkdownOptions {
    breaks?: boolean;
    gfm?: boolean;
    baseURL?: string;
    openLinksInNewTab?: boolean;
    langPrefix?: string;
  }

  interface Props extends MarkdownOptions {
    value: string;
  }

  const Markdown: React.FC<Props>;

  export default Markdown;
}
