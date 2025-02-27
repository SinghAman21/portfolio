import { defineConfig } from 'vite';


const config = defineConfig({
  plugins: [], // Pass plugins as an array of single plugins
  resolve: {
    alias: {
      '@': './src',
    },
  },
});

export default config;
