import { defineConfig } from 'rollup';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

import pkg from './package.json';

export const plugins = [
  resolve(),
  commonjs(),
  typescript({
    tsconfig: 'tsconfig.lib.json',
  }),
];

const config = defineConfig({
  input: 'src/index.ts',
  external: [
    ...Object.keys(pkg.peerDependencies || {}),
    ...Object.keys(pkg.dependencies || {}),
  ],
  plugins,
  output: [
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'auto',
      sourcemap: true,
    },
  ],
});

export default config;
