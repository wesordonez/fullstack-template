import { defineConfig } from 'vite'
import { resolve } from 'path'

import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: "/static/",
  plugins: [react(), tailwindcss()],
  build: {
    manifest: true,
    outDir: resolve("../backend/static"),
    rollupOptions: {
      input: {
        main: resolve("./src/main.jsx")
      }
    }
  },
  server: {
    port: 5173,
    strictPort: true,
    cors: true,
    hmr: {
      host: 'localhost',
      port: 5173,
      protocol: 'ws',
    },
  },
})