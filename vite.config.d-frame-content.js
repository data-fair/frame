import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/d-frame-content.js'),
      name: 'DFrameContent',
      fileName: () => 'd-frame-content.min.js',
      formats: ['iife']
    },
    sourcemap: true,
    emptyOutDir: false
  }
})
