import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import sveltePreprocess from 'svelte-preprocess';

const isDev = process.env.ROLLUP_WATCH !== undefined;

export default {
  input: 'src/main.js', // simple TS file where svelte components are re-exported
  output: {
    sourcemap: isDev,
    format: 'iife',
    name: 'bundle',
    dir: 'dist',
  },
  plugins: [
    svelte({
      preprocess: sveltePreprocess(),
      compilerOptions: {
        dev: isDev,
        customElement: true,
      },
    }),
    resolve({
      browser: true,
      dedupe: ['svelte'],
    }),
    commonjs(),
    terser(),
  ],
  watch: {
    clearScreen: false,
  },
};
