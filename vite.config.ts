import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ghPages } from 'vite-plugin-gh-pages';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ghPages(),
  ],
  // base: '/resume-app/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
});
