import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'


export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@carreras': path.resolve(__dirname, 'src/data/carreras'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@context': path.resolve(__dirname, 'src/context'),
      '@types': path.resolve(__dirname, 'src/types/types.ts'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@icons': path.resolve(__dirname, 'src/assets/svg'),
    },
  },
})