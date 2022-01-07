declare module 'marked-react' {
  import React, { ReactElement } from 'react';

  type RendererFunction = (...args: any[]) => ReactElement | null;

  export interface MarkdownOptions {
    breaks?: boolean;
    gfm?: boolean;
    baseURL?: string;
    openLinksInNewTab?: boolean;
    langPrefix?: string;
    renderer?: Record<string, RendererFunction>;
  }

  interface Props extends MarkdownOptions {
    value?: string;
  }

  const Markdown: React.FC<Props>;

  export default Markdown;
}
