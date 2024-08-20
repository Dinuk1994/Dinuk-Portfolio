import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base : "/Dinuk-Portfolio/",
  plugins: [react()],
  server: {
    // Ensure CORS is handled if needed
    cors: true,
  },
})
