import { defineConfig } from 'vite';


const config = defineConfig({
  plugins: [],
  resolve: {
    alias: {
      '@': './src',
    },
  },
});

export default config;
