import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/v-iframe-compat/d-frame-content.js'),
      name: 'VIframeCompatDFrameContent',
      fileName: () => 'v-iframe-compat/d-frame-content.min.js',
      formats: ['iife']
    },
    sourcemap: true,
    emptyOutDir: false
  }
})
