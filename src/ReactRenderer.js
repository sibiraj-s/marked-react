import { createElement } from 'react';

import { joinBase } from './helpers.js';

class ReactRenderer {
  elementId = 0;
  options;

  constructor(options) {
    const { renderer } = options;

    this.options = options;

    if (renderer && typeof renderer === 'object') {
      Object.entries(renderer).forEach(([rendererName, renderFunction]) => {
        if (!this[rendererName] || typeof renderFunction !== 'function') {
          return;
        }

        this[rendererName] = (...args) => {
          this.elementId += 1;
          return renderFunction.call(this, ...args);
        };
      });
    }
  }

  #h(el, children = null, props = {}) {
    const elProps = {
      key: `marked-react-${this.elementId}`,
    };

    this.elementId += 1;
    return createElement(el, { ...props, ...elProps }, children);
  }

  heading(children, level) {
    return this.#h(`h${level}`, children);
  }

  paragraph(children) {
    return this.#h('p', children);
  }

  link(href, text) {
    const url = joinBase(href, this.options.baseURL);
    const target = this.options.openLinksInNewTab ? '_blank' : null;
    return this.#h('a', text, { href: url, target });
  }

  image(src, alt, title) {
    const url = joinBase(src, this.options.baseURL);
    return this.#h('img', null, { src: url, alt, title });
  }

  codespan(code, lang = null) {
    const className = lang ? `${this.options.langPrefix}${lang}` : null;
    return this.#h('code', code, { className });
  }

  code(code, lang) {
    return this.#h('pre', this.codespan(code, lang));
  }

  blockquote(children) {
    return this.#h('blockquote', children);
  }

  list(children, ordered) {
    return this.#h(ordered ? 'ol' : 'ul', children);
  }

  listItem(children) {
    return this.#h('li', children);
  }

  checkbox(checked) {
    return this.#h('input', null, { type: 'checkbox', disabled: true, checked });
  }

  table(children) {
    return this.#h('table', children);
  }

  tableHeader(children) {
    return this.#h('thead', children);
  }

  tableBody(children) {
    return this.#h('tbody', children);
  }

  tableRow(children) {
    return this.#h('tr', children);
  }

  tableCell(children, flags) {
    const tag = flags.header ? 'th' : 'td';
    return this.#h(tag, children, { align: flags.align });
  }

  strong(children) {
    return this.#h('strong', children);
  }

  em(children) {
    return this.#h('em', children);
  }

  del(children) {
    return this.#h('del', children);
  }

  text(text) {
    return text;
  }

  html(html) {
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
