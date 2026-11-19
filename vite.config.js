import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Lokalno (netlify dev) obrasci idu na Netlify Server na portu 8889.
  server: {
    proxy: {
      '/api': 'http://localhost:8889',
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
    },
  },
});
