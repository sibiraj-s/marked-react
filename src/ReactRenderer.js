import { createElement, Fragment } from 'react';

class ReactRenderer {
  constructor() {
    this.elementId = 0;
  }

  crel(el, children, props) {
    const elProps = {
      key: `marked-react-${this.elementId}`,
    };

    this.elementId += 1;
    return createElement(el, { ...props, ...elProps }, children);
  }

  heading(text, level) {
    return this.crel(`h${level}`, text);
  }

  paragraph(children) {
    return this.crel('p', children);
  }

  text(text) {
    return this.crel(Fragment, text);
  }

  link(href, text, openLinksInNewTab) {
    const target = openLinksInNewTab ? '_blank' : null;
    return this.crel('a', text, { href, target });
  }

  image(href, text, title) {
    return this.crel('img', null, { src: href, alt: text, title });
  }

  codespan(code, lang) {
    return this.crel('code', code, { className: lang || null });
  }

  code(code, lang) {
    return this.crel('pre', this.codespan(code, lang));
  }

  blockquote(quote) {
    return this.crel('blockquote', quote);
  }

  list(ordered, children) {
    return this.crel(ordered ? 'ol' : 'ul', children);
  }

  checkbox(checked = false) {
    return this.crel('input', null, { type: 'checkbox', disabled: true, checked });
  }

  listItem(children) {
    return this.crel('li', children);
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

  html(html) {
    return this.crel(Fragment, html);
  }

  hr() {
    return this.crel('hr');
  }

  br() {
    return this.crel('br');
  }
}

export default ReactRenderer;
