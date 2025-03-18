import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/my-portfolio/',  // <-- добавили путь для GitHub Pages
  plugins: [react()],
})
