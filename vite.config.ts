import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'


export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@carreras': path.resolve(__dirname, './src/data/carreras'),
      '@context': path.resolve(__dirname, './src/context'),


    },
  },
})