import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

const targetURL = new URL(process.env.TARGET || 'http://localhost:3133/')

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error normal error
        config.plugins.push(vuetify({ autoImport: true, styles: { configFile: 'styles/vuetify.scss' } }))
      })
    },
    ['@nuxtjs/google-fonts', {
      families: {
        Nunito: true,
      },
    }],
    ['@nuxt/eslint', {
      config: { stylistic: true },
    }],
  ],
  ssr: false,
  devtools: { enabled: true },
  app: {
    baseURL: targetURL.pathname,
    head: {
      title: 'd-frame - Documentation',
      meta: [
        { name: 'description', content: 'd-frame - Documentation' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: targetURL.pathname + 'favicon.ico' },
      ],
    },
  },
  css: ['~/styles/main.css'],
  vue: { compilerOptions: { isCustomElement: tag => ['d-frame'].includes(tag) } },
  build: {
    transpile: ['vuetify'],
  },
  compatibilityDate: '2024-11-01',
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
