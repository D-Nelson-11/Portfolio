import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Portfolio/', // Reemplazá esto por el nombre real del repositorio
  plugins: [react()],
})
