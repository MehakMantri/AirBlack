import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure the build output is in the 'dist' directory
    rollupOptions: {
      input: {
        main: 'public/index.html' // This should point to the index.html file in the public directory
      }
    }
  },
  server: {
    open: true, // Automatically open the app in the browser
  }
});
