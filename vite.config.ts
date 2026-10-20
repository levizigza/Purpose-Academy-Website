import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Cloudflare / local: site at domain root.
// GitHub Pages: set VITE_BASE=/Purpose-Academy-Website/ in the Pages workflow.
const base = process.env.VITE_BASE || '/'

export default defineConfig({
  base,
  plugins: [react()],
  server: {
    host: '127.0.0.1',
    port: 5173,
  },
})
