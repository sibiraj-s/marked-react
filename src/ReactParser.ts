import { ReactNode } from 'react';
import type { Token, Tokens } from 'marked';

import ReactRenderer, { HeadingLevels } from './ReactRenderer';
import { unescape } from './helpers';

interface ReactParserOptions {
  renderer: ReactRenderer;
}

class ReactParser {
  renderer: ReactRenderer;

  constructor(options: ReactParserOptions) {
    this.renderer = options.renderer;
  }

  parse(tokens: Token[]): ReactNode[] {
    return tokens.map((token) => {
      switch (token.type) {
        case 'space': {
          return null;
        }

        case 'heading': {
          const level = token.depth as HeadingLevels;
          return this.renderer.heading(this.parseInline(token.tokens), level);
        }

        case 'paragraph': {
          return this.renderer.paragraph(this.parseInline(token.tokens));
        }

        case 'text': {
          const textToken = token as Tokens.Text;
          return textToken.tokens ? this.parseInline(textToken.tokens) : token.text;
        }

        case 'blockquote': {
          const blockquoteToken = token as Tokens.Blockquote;
          const quote = this.parse(blockquoteToken.tokens);
          return this.renderer.blockquote(quote);
        }

        case 'list': {
          const listToken = token as Tokens.List;

          const children = listToken.items.map((item) => {
            const listItemChildren = [];

            if (item.task) {
              listItemChildren.push(this.renderer.checkbox(item.checked ?? false));
            }

            listItemChildren.push(this.parse(item.tokens));

            return this.renderer.listItem(listItemChildren);
          });

          return this.renderer.list(children, token.ordered, token.ordered ? token.start : undefined);
        }

        case 'code': {
          return this.renderer.code(token.text, token.lang);
        }

        case 'html': {
          return this.renderer.html(token.text);
        }

        case 'table': {
          const tableToken = token as Tokens.Table;
          const headerCells = tableToken.header.map((cell, index) => {
            return this.renderer.tableCell(this.parseInline(cell.tokens), { header: true, align: token.align[index] });
          });

          const headerRow = this.renderer.tableRow(headerCells);
          const header = this.renderer.tableHeader(headerRow);

          const bodyChilren = tableToken.rows.map((row) => {
            const rowChildren = row.map((cell, index) => {
              return this.renderer.tableCell(this.parseInline(cell.tokens), {
                header: false,
                align: token.align[index],
              });
            });

            return this.renderer.tableRow(rowChildren);
          });

          const body = this.renderer.tableBody(bodyChilren);

          return this.renderer.table([header, body]);
        }

        case 'hr': {
          return this.renderer.hr();
        }

        default: {
          console.warn(`Token with "${token.type}" type was not found`); // eslint-disable-line no-console
          return null;
        }
      }
    });
  }

  parseInline(tokens: Token[] = []): ReactNode[] {
    return tokens.map((token) => {
      switch (token.type) {
        case 'text': {
          return this.renderer.text(unescape(token.text));
        }

        case 'strong': {
          return this.renderer.strong(this.parseInline(token.tokens));
        }

        case 'em': {
          return this.renderer.em(this.parseInline(token.tokens));
        }

        case 'del': {
          return this.renderer.del(this.parseInline(token.tokens));
        }

        case 'codespan': {
          return this.renderer.codespan(unescape(token.text));
        }

        case 'link': {
          return this.renderer.link(token.href, this.parseInline(token.tokens));
        }

        case 'image': {
          return this.renderer.image(token.href, token.text, token.title);
        }

        case 'html': {
          return this.renderer.html(token.text);
        }

        case 'br': {
          return this.renderer.br();
        }

        case 'escape': {
          return this.renderer.text(token.text);
        }

        default: {
          console.warn(`Token with "${token.type}" type was not found`); // eslint-disable-line no-console
          return null;
        }
      }
    });
  }
}

export default ReactParser;
