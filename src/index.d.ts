declare module 'marked-react' {
  import { ReactElement, FC, ReactNode } from 'react';

  export interface MarkdownOptions {
    isInline?: boolean;
    breaks?: boolean;
    gfm?: boolean;
    baseURL?: string;
    openLinksInNewTab?: boolean;
    langPrefix?: string;
    renderer?: ReactRenderer | RendererObject;
  }

  type RendererObject = Partial<Omit<ReactRenderer, 'elementId'>>;

  class ReactRenderer {
    elementId: number;

    constructor(options?: MarkdownOptions);
    heading(children: any, level: any): ReactElement;
    paragraph(children: any): ReactElement;
    link(href: any, text: any): ReactElement;
    image(href: any, text: any, title: any): ReactElement;
    codespan(code: any, lang: any): ReactElement;
    code(code: any, lang: any): ReactElement;
    blockquote(children: any): ReactElement;
    list(children: any, ordered: any): ReactElement;
    listItem(children: any): ReactElement;
    checkbox(checked: any): ReactElement;
    table(children: any): ReactElement;
    tableHeader(children: any): ReactElement;
    tableBody(children: any): ReactElement;
    tableRow(children: any): ReactElement;
    tableCell(children: any, flags: any): ReactElement;
    strong(children: any): ReactElement;
    em(children: any): ReactElement;
    del(children: any): ReactElement;
    text(text: any): any;
    html(html: any): any;
    hr(): ReactElement;
    br(): ReactElement;
  }

  interface Props extends MarkdownOptions {
    value?: string;
    children?: ReactNode;
  }

  const Markdown: FC<Props>;

  export default Markdown;
}
