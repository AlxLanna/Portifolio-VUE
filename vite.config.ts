import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@views': path.resolve(__dirname, './src/views')
    }
  },
  define: {
    'process.env.BASE_URL': JSON.stringify('/') // Adicione esta linha
  }
})