import { createElement, ElementType, ReactElement, ReactNode } from 'react';

import { joinBase } from './helpers';

export type HeadingLevels = 1 | 2 | 3 | 4 | 5 | 6;
export interface TableFlags {
  header?: boolean;
  align?: 'center' | 'left' | 'right' | null;
}

export type CustomReactRenderer = Partial<ReactRenderer>;
export type RendererMethods = keyof ReactRenderer;

export interface ReactRendererOptions {
  baseURL?: string;
  openLinksInNewTab?: boolean;
  langPrefix?: string;
  renderer?: CustomReactRenderer;
}

class ReactRenderer {
  #elId = 0;
  #options: ReactRendererOptions;

  constructor(options: ReactRendererOptions = {}) {
    const { renderer } = options;

    this.#options = options;

    if (renderer && typeof renderer === 'object') {
      Object.entries(renderer as ReactRenderer).forEach(([key, value]) => {
        const rendererName = key as keyof ReactRenderer;
        const rendererFunction = value;

        if (!this[rendererName] || rendererName === 'elementId' || typeof rendererFunction !== 'function') {
          return;
        }

        const originalFunction = this[rendererName];

        this[rendererName] = <T extends typeof originalFunction>(...args: Parameters<T>) => {
          this.#incrementElId();
          return rendererFunction.apply(this, args);
        };
      });
    }
  }

  #h<T extends ElementType>(el: T, children: ReactNode = null, props = {}): ReactElement {
    const elProps = {
      key: `marked-react-${this.elementId}`,
    };

    this.#incrementElId();
    return createElement(el, { ...props, ...elProps }, children);
  }

  #incrementElId() {
    this.#elId += 1;
  }

  get elementId() {
    return this.#elId;
  }

  heading(children: ReactNode, level: HeadingLevels) {
    return this.#h(`h${level}`, children);
  }

  paragraph(children: ReactNode) {
    return this.#h('p', children);
  }

  link(href: string, text: ReactNode) {
    const url = joinBase(href, this.#options.baseURL);
    const target = this.#options.openLinksInNewTab ? '_blank' : null;
    return this.#h('a', text, { href: url, target });
  }

  image(src: string, alt: string, title: string | null = null) {
    const url = joinBase(src, this.#options.baseURL);
    return this.#h('img', null, { src: url, alt, title });
  }

  codespan(code: ReactNode, lang: string | null = null) {
    const className = lang ? `${this.#options.langPrefix}${lang}` : null;
    return this.#h('code', code, { className });
  }

  code(code: ReactNode, lang: string | undefined) {
    return this.#h('pre', this.codespan(code, lang));
  }

  blockquote(children: ReactNode) {
    return this.#h('blockquote', children);
  }

  list(children: ReactNode, ordered: boolean, start: number | undefined) {
    return this.#h(ordered ? 'ol' : 'ul', children, ordered ? { start } : {});
  }

  listItem(children: ReactNode[]) {
    return this.#h('li', children);
  }

  checkbox(checked: ReactNode) {
    return this.#h('input', null, { type: 'checkbox', disabled: true, checked });
  }

  table(children: ReactNode[]) {
    return this.#h('table', children);
  }

  tableHeader(children: ReactNode) {
    return this.#h('thead', children);
  }

  tableBody(children: ReactNode[]) {
    return this.#h('tbody', children);
  }

  tableRow(children: ReactNode[]) {
    return this.#h('tr', children);
  }

  tableCell(children: ReactNode[], flags: TableFlags) {
    const tag = flags.header ? 'th' : 'td';
    return this.#h(tag, children, { align: flags.align });
  }

  strong(children: ReactNode) {
    return this.#h('strong', children);
  }

  em(children: ReactNode) {
    return this.#h('em', children);
  }

  del(children: ReactNode) {
    return this.#h('del', children);
  }

  text(text: ReactNode) {
    return text;
  }

  html(html: ReactNode) {
    return html;
  }

  hr() {
    return this.#h('hr');
  }

  br() {
    return this.#h('br');
  }
}

export default ReactRenderer;
