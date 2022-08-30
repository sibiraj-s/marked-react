declare module '*.md';

declare module '!!raw-loader!*' {
  const contents: string;
  export = contents;
}

declare module 'react-lowlight';
declare module 'highlight.js/*';
