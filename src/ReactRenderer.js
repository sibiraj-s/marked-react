import { createElement } from 'react';

import defaults from './defaults';
import { joinBase } from './helpers';

class ReactRenderer {
  elementId = 0;

  constructor(options = defaults) {
    const { renderer } = options;

    this.options = options;

    if (renderer && typeof renderer === 'object') {
      Object.entries(renderer).forEach(([rendererName, renderFunction]) => {
        const originalRenderFunction = this[rendererName];

        if (originalRenderFunction && typeof renderFunction === 'function') {
          this[rendererName] = renderFunction;
        }
      });
    }
  }

  crel(el, children, props) {
    const elProps = {
      key: `marked-react-${this.elementId}`,
    };

    this.elementId += 1;
    return createElement(el, { ...props, ...elProps }, children);
  }

  heading(children, level) {
    return this.crel(`h${level}`, children);
  }

  paragraph(children) {
    return this.crel('p', children);
  }

  link(href, text) {
    const url = joinBase(href, this.options.baseURL);
    const target = this.options.openLinksInNewTab ? '_blank' : null;
    return this.crel('a', text, { href: url, target });
  }

  image(href, text, title) {
    const url = joinBase(href, this.options.baseURL);
    return this.crel('img', null, { src: url, alt: text, title });
  }

  codespan(code, lang) {
    const className = lang ? `${this.options.langPrefix}${lang}` : null;
    return this.crel('code', code, { className });
  }

  code(code, lang) {
    return this.crel('pre', this.codespan(code, lang));
  }

  blockquote(children) {
    return this.crel('blockquote', children);
  }

  list(children, ordered) {
    return this.crel(ordered ? 'ol' : 'ul', children);
  }

  listItem(children) {
    return this.crel('li', children);
  }

  checkbox(checked) {
    return this.crel('input', null, { type: 'checkbox', disabled: true, checked });
  }

  table(children) {
    return this.crel('table', children);
  }

  tableHeader(children) {
    return this.crel('thead', children);
  }

  tableBody(children) {
    return this.crel('tbody', children);
  }

  tableRow(children) {
    return this.crel('tr', children);
  }

  tableCell(children, flags) {
    const tag = flags.header ? 'th' : 'td';
    return this.crel(tag, children, { align: flags.align });
  }

  strong(children) {
    return this.crel('strong', children);
  }

  em(children) {
    return this.crel('em', children);
  }

  del(children) {
    return this.crel('del', children);
  }

  text(text) {
    return text;
  }

  html(html) {
    return html;
  }

  hr() {
    return this.crel('hr');
  }

  br() {
    return this.crel('br');
  }
}

export default ReactRenderer;
