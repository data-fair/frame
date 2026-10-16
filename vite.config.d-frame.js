import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    // native class fields: lowering them adds helpers, outside of the iife for an entry without exports
    // (they were global variables like $ that overwrote jquery in the pages of the parent)
    target: 'es2022',
    lib: {
      entry: resolve(__dirname, 'lib/d-frame.ts'),
      name: 'DFrame',
      fileName: () => 'd-frame.min.js',
      formats: ['iife']
    },
    sourcemap: true,
    emptyOutDir: false
  }
})
