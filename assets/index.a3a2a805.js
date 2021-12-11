var j=Object.defineProperty;var g=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var u=(r,e,t)=>e in r?j(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,m=(r,e)=>{for(var t in e||(e={}))E.call(e,t)&&u(r,t,e[t]);if(g)for(var t of g(e))M.call(e,t)&&u(r,t,e[t]);return r};var b=(r,e,t)=>(u(r,typeof e!="symbol"?e+"":e,t),t);import{r as i,L as C,j as f,R as O}from"./vendor.f8822c3c.js";const T=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=t(n);fetch(n.href,a)}};T();const p={breaks:!1,gfm:!0,baseURL:null,openLinksInNewTab:!0,langPrefix:"language-",renderer:null},N={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},w=/&(?:amp|lt|gt|quot|#(?:0+)?39);/g,P=RegExp(w.source),x=(r="")=>P.test(r)?r.replace(w,e=>N[e]||"'"):r,k=(r,e)=>{if(!e)return r;try{return new URL(r,e).href}catch{return r}};class y{constructor(e=p){b(this,"elementId",0);const{renderer:t}=e;this.options=e,t&&typeof t=="object"&&Object.entries(t).forEach(([s,n])=>{const a=this[s];s!=="h"&&a&&typeof n=="function"&&(this[s]=(...o)=>(this.elementId+=1,n.bind(this)(...o)))})}h(e,t,s){const n={key:`marked-react-${this.elementId}`};return this.elementId+=1,i.exports.createElement(e,m(m({},s),n),t)}heading(e,t){return this.h(`h${t}`,e)}paragraph(e){return this.h("p",e)}link(e,t){const s=k(e,this.options.baseURL),n=this.options.openLinksInNewTab?"_blank":null;return this.h("a",t,{href:s,target:n})}image(e,t,s){const n=k(e,this.options.baseURL);return this.h("img",null,{src:n,alt:t,title:s})}codespan(e,t){const s=t?`${this.options.langPrefix}${t}`:null;return this.h("code",e,{className:s})}code(e,t){return this.h("pre",this.codespan(e,t))}blockquote(e){return this.h("blockquote",e)}list(e,t){return this.h(t?"ol":"ul",e)}listItem(e){return this.h("li",e)}checkbox(e){return this.h("input",null,{type:"checkbox",disabled:!0,checked:e})}table(e){return this.h("table",e)}tableHeader(e){return this.h("thead",e)}tableBody(e){return this.h("tbody",e)}tableRow(e){return this.h("tr",e)}tableCell(e,t){const s=t.header?"th":"td";return this.h(s,e,{align:t.align})}strong(e){return this.h("strong",e)}em(e){return this.h("em",e)}del(e){return this.h("del",e)}text(e){return e}html(e){return e}hr(){return this.h("hr")}br(){return this.h("br")}}class U{constructor(e=p){this.options=e,this.renderer=e.renderer||new y}parse(e){return e.map(t=>{switch(t.type){case"space":return null;case"heading":return this.renderer.heading(this.parseInline(t.tokens),t.depth);case"paragraph":return this.renderer.paragraph(this.parseInline(t.tokens));case"text":return t.tokens?this.parseInline(t.tokens):t.text;case"blockquote":{const s=this.parse(t.tokens);return this.renderer.blockquote(s)}case"list":{const s=t.items.map(n=>{const a=[];return n.task&&a.push(this.renderer.checkbox(n.checked)),a.push(this.parse(n.tokens)),this.renderer.listItem(a)});return this.renderer.list(s,t.ordered)}case"code":return this.renderer.code(t.text,t.lang);case"html":return this.renderer.html(t.text);case"table":{const s=t.header.map((h,d)=>this.renderer.tableCell(this.parseInline(h.tokens),{header:!0,align:t.align[d]})),n=this.renderer.tableRow(s),a=this.renderer.tableHeader(n),o=t.rows.map((h,d)=>{const R=h.map(L=>this.renderer.tableCell(this.parseInline(L.tokens),{header:!1,align:t.align[d]}));return this.renderer.tableRow(R)}),c=this.renderer.tableBody(o);return this.renderer.table([a,c])}case"hr":return this.renderer.hr();default:return console.warn(`Token with "${t.type}" type was not found`),null}})}parseInline(e){return e.map(t=>{switch(t.type){case"text":return this.renderer.text(x(t.text));case"strong":return this.renderer.strong(this.parseInline(t.tokens));case"em":return this.renderer.em(this.parseInline(t.tokens));case"del":return this.renderer.del(this.parseInline(t.tokens));case"codespan":return this.renderer.codespan(x(t.text));case"link":return this.renderer.link(t.href,this.parseInline(t.tokens));case"image":return this.renderer.image(t.href,t.text,t.title);case"html":return this.renderer.html(t.text);case"br":return this.renderer.br();case"escape":return this.renderer.text(t.text);default:return console.warn(`Token with "${t.type}" type was not found`),null}})}}const $=r=>{if(r.value&&typeof r.value!="string")throw new TypeError(`[marked-react]: Expected value to be of type string but got ${typeof r.value}`);if(r.children&&typeof r.children!="string")throw new TypeError(`[marked-react]: Expected children to be of type string but got ${typeof r.children}`)},v=r=>{var o,c;$(r);const e={breaks:r.breaks,gfm:r.gfm},s=new C(e).lex((c=(o=r.value)!=null?o:r.children)!=null?c:""),n={renderer:new y({renderer:r.renderer,baseURL:r.baseURL,openLinksInNewTab:r.openLinksInNewTab,langPrefix:r.langPrefix})},a=new U(n).parse(s);return i.exports.createElement(i.exports.Fragment,null,a)};v.defaultProps=p;var q=`# marked-react

> Render Markdown as React components using [marked].

[![Tests](https://github.com/sibiraj-s/marked-react/actions/workflows/tests.yml/badge.svg)](https://github.com/sibiraj-s/marked-react/actions/workflows/tests.yml)
[![Version](https://badgen.net/npm/v/marked-react)](https://npmjs.com/marked-react)
[![License](https://badgen.net/npm/license/marked-react)](https://github.com/sibiraj-s/marked-react/blob/master/LICENSE)
[![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/sibiraj-s/marked-react)

## TL;DR

- Uses [marked](https://marked.js.org/) to parse markdown
- Renders actual react elements instead of using \`dangerouslySetInnerHTML\`

[Demo]

## Installation

\`\`\`bash
$ npm i marked-react
\`\`\`

## Usage

\`\`\`js
import ReactDOM from 'react-dom';
import Markdown from 'marked-react';

const rootEl = document.getElementById('root');
ReactDOM.render(<Markdown># Hello world!</Markdown>, rootEl);
\`\`\`

### Component Props

- **value[\`string\`]** - Markdown content.
- **baseURL** [\`string\`] - A prefix url for any relative link.
- **openLinksInNewTab** [\`boolean\`] - Attribute \`target=_blank\` will be added to link elements
- **langPrefix** [\`string\`] - A string to prefix the className in a \`<code>\` block. Useful for syntax highlighting. Defaults to \`language-\`.
- **breaks** [\`boolean\`] - Add \`br\` tag on single line breaks. Requires \`gfm\` to be \`true\`
- **gfm** [\`boolean\`] - Use approved [Github Flavoured Markdown](https://github.github.com/gfm/)

## Syntax highlight code blocks

An example with [react-lowlight]

\`\`\`js
import ReactDOM from 'react-dom';
import Markdown from 'marked-react';
import Lowlight from 'react-lowlight';
import javascript from 'highlight.js/lib/languages/javascript';

Lowlight.registerLanguage('js', javascript);

const renderer = {
  code: (snippet, lang) => {
    return <Lowlight language={lang} value={snippet} />;
  },
};

const markdown = 'console.log("Hello world!")';

const rootEl = document.getElementById('root');
ReactDOM.render(<Markdown value={markdown} renderer={renderer} />, rootEl);
\`\`\`

Some awesome options available to highlight code

- [react-syntax-highlighter]
- [react-lowlight]
- [react-refractor]

[marked]: https://marked.js.org/
[demo]: https://sibiraj-s.github.io/marked-react/
[react-lowlight]: https://github.com/rexxars/react-lowlight
[react-refractor]: https://github.com/rexxars/react-refractor
[react-syntax-highlighter]: https://github.com/react-syntax-highlighter/react-syntax-highlighter
`;const l=f.exports.jsx,I=f.exports.jsxs,A=()=>{const[r,e]=i.exports.useState(q);return I("div",{className:"Wrapper",children:[l("div",{className:"Container",children:l("textarea",{value:r,onChange:s=>{e(s.target.value)},spellCheck:"false"})}),l("div",{className:"Container Output",children:l(v,{value:r})})]})};O.render(I(i.exports.StrictMode,{children:[" ",l(A,{})," "]}),document.getElementById("root"));
