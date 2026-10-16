import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    // native class fields, see vite.config.d-frame.js
    target: 'es2022',
    lib: {
      entry: resolve(__dirname, 'lib/d-frame-content.ts'),
      name: 'DFrameContent',
      fileName: () => 'd-frame-content.min.js',
      formats: ['iife']
    },
    sourcemap: true,
    emptyOutDir: false
  }
})
