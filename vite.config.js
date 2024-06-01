import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        // Specify the entry JavaScript file for your application
        main: 'src/main.jsx' // Adjust the path as needed
      }
    }
  }
});
