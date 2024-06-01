// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    outDir: 'build',
    rollupOptions: {
      input: {
        main: 'src/main.jsx' 
      }
    }
  }
});
