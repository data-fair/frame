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
          variables: {
            // deactivate automatic partial transparencies
            // best to control colors precisely and ensure sufficient contrast for readability
            'high-emphasis-opacity': 1,
            'medium-emphasis-opacity': 0.87,
          },
          colors: {
            // standard vuetify colors, see https://vuetifyjs.com/en/styles/colors/#material-colors
            'background': '#FAFAFA', // grey-lighten-5
            'on-background': '#424242', // grey-darken-3
            'surface': '#FFFFFF',
            'on-surface': '#424242', // grey-darken-3
            'primary': '#1976D2', // blue-darken-2
            'on-primary': '#FFFFFF',
            'text-primary': '#1565C0',
            'secondary': '#81D4FA', // light-blue-lighten-3
            'on-secondary': '#000000',
            'text-secondary': '#0277BD', // light-blue-darken-3
            'accent': '#2962FF', // blue-accent-4
            'on-accent': '#FFFFFF',
            'info': '#FFE0B2', // orange-lighten-4
            'on-info': '#000000',
            'text-info': '#BF4300',
            'success': '#B9F6CA', // green-accent-1
            'on-success': '#000000',
            'text-success': '#2E7D32', // green-darken-3
            'error': '#D50000', // red-accent-4
            'on-error': '#FFFFFF',
            'warning': '#D81B60', // pink-darken-1
            'on-warning': '#FFFFFF',
            'admin': '#B71C1C', // red-darken-4
            'on-admin': '#FFFFFF',
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
