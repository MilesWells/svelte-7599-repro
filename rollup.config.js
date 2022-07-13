import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/main.js',
  output: {
    format: 'iife',
    name: 'main',
    dir: 'dist',
  },
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true
      },
    }),
    resolve({ browser: true }),
  ],
};
