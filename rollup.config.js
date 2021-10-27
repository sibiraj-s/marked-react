import { defineConfig } from 'rollup';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export const plugins = [
  resolve(),
  commonjs(),
  babel({ babelHelpers: 'bundled' }),
];

export default defineConfig({
  input: 'src/index.jsx',
  external: ['react', 'marked'],
  plugins,
  output: [
    {
      file: 'dist/marked-react.js',
      format: 'esm',
      sourcemap: true,
    },
    {
      file: 'dist/marked-react.cjs',
      format: 'cjs',
      exports: 'auto',
      sourcemap: true,
    },
  ],
});
