import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    react(),
    tailwindcss(),
  ],
  fontFamily:{
    sans: ["Inter","system-ui", "Arial", "sans-serif"]
  },
  colors:{
    primary: "#0F62FE",
    colorBg: "#F2F4F8"
  }
})