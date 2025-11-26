import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: false, // Disable for now
  sourcemap: true,
  clean: true,
  external: [
    'react',
    'react-dom',
    '@monorepo/core',
    'immer',
    'lodash',
    'regenerator-runtime'
  ],
  treeshake: true,
  splitting: false,
  minify: false,
});