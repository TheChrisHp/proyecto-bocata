import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://thechrishp.github.io/proyecto-bocata/",
  plugins: [react()],
})