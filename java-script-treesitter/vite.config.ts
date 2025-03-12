import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/java-script-treesitter/",
  //optimizeDeps: { exclude: ["tree-sitter-javascript"] },
})

