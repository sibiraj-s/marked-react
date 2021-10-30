import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  root: 'demo',
  server: {
    port: 5678,
  },
  build: {
    outDir: 'build',
  },
  plugins: [
    react(),
  ],
});
