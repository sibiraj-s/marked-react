var j=Object.defineProperty;var g=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var h=(t,e,r)=>e in t?j(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,u=(t,e)=>{for(var r in e||(e={}))E.call(e,r)&&h(t,r,e[r]);if(g)for(var r of g(e))M.call(e,r)&&h(t,r,e[r]);return t};var p=(t,e,r)=>(h(t,typeof e!="symbol"?e+"":e,r),r);import{r as l,l as C,j as b,R as T,a as O}from"./vendor.a06c5ac7.js";const N=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}};N();const m={breaks:!1,gfm:!0,baseURL:null,openLinksInNewTab:!0,langPrefix:"language-",renderer:null},P={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},f=/&(?:amp|lt|gt|quot|#(?:0+)?39);/g,U=RegExp(f.source),w=(t="")=>U.test(t)?t.replace(f,e=>P[e]||"'"):t,x=(t,e)=>{if(!e)return t;try{return new URL(t,e).href}catch{return t}};class k{constructor(e=m){p(this,"elementId",0);const{renderer:r}=e;this.options=e,r&&typeof r=="object"&&Object.entries(r).forEach(([s,n])=>{this[s]&&typeof n=="function"&&(this[s]=n)})}crel(e,r,s){const n={key:`marked-react-${this.elementId}`};return this.elementId+=1,l.exports.createElement(e,u(u({},s),n),r)}heading(e,r){return this.crel(`h${r}`,e)}paragraph(e){return this.crel("p",e)}link(e,r){const s=x(e,this.options.baseURL),n=this.options.openLinksInNewTab?"_blank":null;return this.crel("a",r,{href:s,target:n})}image(e,r,s){const n=x(e,this.options.baseURL);return this.crel("img",null,{src:n,alt:r,title:s})}codespan(e,r){const s=r?`${this.options.langPrefix}${r}`:null;return this.crel("code",e,{className:s})}code(e,r){return this.crel("pre",this.codespan(e,r))}blockquote(e){return this.crel("blockquote",e)}list(e,r){return this.crel(r?"ol":"ul",e)}listItem(e){return this.crel("li",e)}checkbox(e){return this.crel("input",null,{type:"checkbox",disabled:!0,checked:e})}table(e){return this.crel("table",e)}tableHeader(e){return this.crel("thead",e)}tableBody(e){return this.crel("tbody",e)}tableRow(e){return this.crel("tr",e)}tableCell(e,r){const s=r.header?"th":"td";return this.crel(s,e,{align:r.align})}strong(e){return this.crel("strong",e)}em(e){return this.crel("em",e)}del(e){return this.crel("del",e)}text(e){return e}html(e){return e}hr(){return this.crel("hr")}br(){return this.crel("br")}}class ${constructor(e=m){this.options=e,this.renderer=e.renderer||new k}parse(e){return e.map(r=>{switch(r.type){case"space":return null;case"heading":return this.renderer.heading(this.parseInline(r.tokens),r.depth);case"paragraph":return this.renderer.paragraph(this.parseInline(r.tokens));case"text":return r.tokens?this.parseInline(r.tokens):r.text;case"blockquote":{const s=this.parse(r.tokens);return this.renderer.blockquote(s)}case"list":{const s=r.items.map(n=>{const a=[];return n.task&&a.push(this.renderer.checkbox(n.checked)),a.push(this.parse(n.tokens)),this.renderer.listItem(a)});return this.renderer.list(s,r.ordered)}case"code":return this.renderer.code(r.text,r.lang);case"html":return this.renderer.html(r.text);case"table":{const s=r.header.map((c,d)=>this.renderer.tableCell(this.parseInline(c.tokens),{header:!0,align:r.align[d]})),n=this.renderer.tableRow(s),a=this.renderer.tableHeader(n),o=r.rows.map((c,d)=>{const I=c.map(L=>this.renderer.tableCell(this.parseInline(L.tokens),{header:!1,align:r.align[d]}));return this.renderer.tableRow(I)}),R=this.renderer.tableBody(o);return this.renderer.table([a,R])}case"hr":return this.renderer.hr();default:return console.warn(`Token with "${r.type}" type was not found`),null}})}parseInline(e){return e.map(r=>{switch(r.type){case"text":return this.renderer.text(w(r.text));case"strong":return this.renderer.strong(this.parseInline(r.tokens));case"em":return this.renderer.em(this.parseInline(r.tokens));case"del":return this.renderer.del(this.parseInline(r.tokens));case"codespan":return this.renderer.codespan(w(r.text));case"link":return this.renderer.link(r.href,this.parseInline(r.tokens));case"image":return this.renderer.image(r.href,r.text,r.title);case"html":return this.renderer.html(r.text);case"br":return this.renderer.br();case"escape":return this.renderer.text(r.text);default:return console.warn(`Token with "${r.type}" type was not found`),null}})}}const q=t=>{if(t.value&&typeof t.value!="string")throw new TypeError(`[marked-react]: Expected value to be of type string but got ${typeof t.value}`);if(t.children&&typeof t.children!="string")throw new TypeError(`[marked-react]: Expected children to be of type string but got ${typeof t.children}`)},y=t=>{var a,o;q(t);const e={breaks:t.breaks,gfm:t.gfm},r=C((o=(a=t.value)!=null?a:t.children)!=null?o:"",e),s={renderer:new k({renderer:t.renderer,baseURL:t.baseURL,openLinksInNewTab:t.openLinksInNewTab,langPrefix:t.langPrefix})},n=new $(s).parse(r);return l.exports.createElement(l.exports.Fragment,null,n)};y.defaultProps=m;var A=`# marked-react

> Render Markdown as React components using [marked].

[![Tests](https://github.com/sibiraj-s/marked-react/actions/workflows/tests.yml/badge.svg)](https://github.com/sibiraj-s/marked-react/actions/workflows/tests.yml)
[![Version](https://badgen.net/npm/v/marked-react)](https://npmjs.com/marked-react)
[![License](https://badgen.net/npm/license/marked-react)](https://github.com/sibiraj-s/marked-react/blob/master/LICENSE)
[![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/sibiraj-s/marked-react)

## TL;DR

- Uses [marked](https://marked.js.org/) to parse markdown
- Renders actual react elements instead of using \`dangerouslySetInnerHTML\`

## Installation

\`\`\`bash
$ npm i marked-react
\`\`\`

### Usage

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

### Syntax highlight code blocks

There are some awesome options available to highlight code

- [react-lowlight]
- [react-refractor]
- [react-syntax-highlighter]

An example with [react-lowlight]

\`\`\`js
import ReactDOM from 'react-dom';
import Markdown from 'marked-react';
import Lowlight from 'react-lowlight';
import javascript from 'highlight.js/lib/languages/javascript';

Lowlight.registerLanguage('js', javascript);

const renderer = {
  code: (code, lang) => {
    return <Lowlight language={lang} value={code} />;
  },
};

const markdown = '# Hello world!';

const rootEl = document.getElementById('root');
ReactDOM.render(<Markdown value={markdown} renderer={renderer} />, rootEl);
\`\`\`

[marked]: https://marked.js.org/
[react-lowlight]: https://github.com/rexxars/react-lowlight
[react-refractor]: https://github.com/rexxars/react-refractor
[react-syntax-highlighter]: https://github.com/react-syntax-highlighter/react-syntax-highlighter
`;const i=b.exports.jsx,v=b.exports.jsxs,H=()=>{const[t,e]=l.exports.useState(A);return v("div",{className:"Wrapper",children:[i("div",{className:"Container",children:i("textarea",{value:t,onChange:s=>{e(s.target.value)},spellCheck:"false"})}),i("div",{className:"Container Output",children:i(y,{value:t})})]})};T.render(v(O.StrictMode,{children:[" ",i(H,{})," "]}),document.getElementById("root"));
