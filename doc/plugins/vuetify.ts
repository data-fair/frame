import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import colors from 'vuetify/lib/util/colors.mjs'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    defaults: {
      global: {
        density: 'comfortable',
      },
    },
    theme: {
      themes: {
        light: {
          colors: {
            primary: colors.blue.darken2,
            secondary: colors.deepOrange.darken4,
          },
        },
      },
    },
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
  })
  nuxtApp.vueApp.use(vuetify)
})
