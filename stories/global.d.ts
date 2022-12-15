declare module '*.md';

declare module '*?raw' {
  const contents: string;
  export = contents;
}

declare module 'react-lowlight';
declare module 'highlight.js/*';
