import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5000,
    // O 'port' se refere a porta que o vite ira abrir o projeto.
    strictPort: true,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        // Já o target, é o local que o vite irá fazer o fetch. No caso o servidor node esta rodando na porta 3000.
        changeOrigin: true,
        secure: false,
      },
    }}
})
