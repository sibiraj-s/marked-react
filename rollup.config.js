import { readFileSync } from 'node:fs';
import { defineConfig } from 'rollup';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url)));

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
    },
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'auto',
    },
  ],
});

export default config;
