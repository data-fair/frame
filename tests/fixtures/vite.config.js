import { fileURLToPath } from 'node:url'

// pages using a history router: every path below their base is served by the same html file
const spaPages = ['router-parent', 'router-child']

export default {
  root: fileURLToPath(new URL('../..', import.meta.url)),
  logLevel: 'warn',
  server: {
    // the parent is opened on 127.0.0.1, "localhost" gives a cross-origin child on the same server
    host: '127.0.0.1',
    hmr: false
  },
  // pre-bundle up front, a late discovery would reload the page in the middle of a test
  optimizeDeps: {
    entries: ['tests/fixtures/*.html'],
    include: ['vue', 'vue-router']
  },
  plugins: [{
    name: 'fixtures-spa-fallback',
    configureServer (server) {
      server.middlewares.use((req, _res, next) => {
        const page = spaPages.find(p => req.url?.startsWith(`/tests/fixtures/${p}/`))
        if (page) req.url = `/tests/fixtures/${page}.html`
        next()
      })
    }
  }]
}
