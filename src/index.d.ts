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
    heading(children: ReactNode[], level: 1 | 2 | 3 | 4 | 5 | 6): ReactElement;
    paragraph(children: ReactNode[]): ReactElement;
    link(href: string, text: ReactNode[]): ReactElement;
    image(href: string, text: string, title: string): ReactElement;
    codespan(code: ReactNode[], lang: string): ReactElement;
    code(code: ReactNode[], lang: string): ReactElement;
    blockquote(children: ReactNode[]): ReactElement;
    list(children: ReactNode[], ordered: boolean): ReactElement;
    listItem(children: ReactNode[]): ReactElement;
    checkbox(checked: ReactNode[]): ReactElement;
    table(children: ReactNode[]): ReactElement;
    tableHeader(children: ReactNode[]): ReactElement;
    tableBody(children: ReactNode[]): ReactElement;
    tableRow(children: ReactNode[]): ReactElement;
    tableCell(children: ReactNode[], flags: { header: boolean, align: 'center' | 'left' | 'right' | null}): ReactElement;
    strong(children: ReactNode[]): ReactElement;
    em(children: ReactNode[]): ReactElement;
    del(children: ReactNode[]): ReactElement;
    text(text: string): string;
    html(html: string): string;
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
