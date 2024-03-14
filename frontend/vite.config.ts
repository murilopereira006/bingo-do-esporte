import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const port:number = parseInt(process.env.VITE_PORT ? process.env.VITE_PORT : '3001');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: port
  }
})
