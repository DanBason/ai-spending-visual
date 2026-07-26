import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// base is set for GitHub Pages project sites (username.github.io/ai-spending-visual/).
// Override with VITE_BASE env var when deploying elsewhere (e.g. Vercel uses '/').
export default defineConfig({
  base: process.env.VITE_BASE ?? '/ai-spending-visual/',
  plugins: [react(), tailwindcss()],
})
