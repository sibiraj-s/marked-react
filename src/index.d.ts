declare module 'marked-react' {
  import React from 'react';

  export interface MarkdownOptions {
    baseURL?: string;
    openLinksInNewTab?: boolean;
    langPrefix?: string;
    breaks?: boolean;
    gfm?: boolean;
  }

  interface Props {
    value: string;
    options: MarkdownOptions;
  }

  const Markdown: React.FC<Props>;

  export default Markdown;
}
