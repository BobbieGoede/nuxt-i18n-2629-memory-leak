export default defineNuxtConfig({
  app: {
    baseURL: '/',
    buildAssetsDir: 'assets'
  },
  modules: [
    '@pinia/nuxt',
    [
      '@nuxtjs/i18n',
      {
        defaultLocale: 'en',
        lazy: true,
        langDir: 'lang',
        detectBrowserLanguage: false,
        compilation: {
          strictMessage: false,
        },
        locales: [
          {
            code: 'en',
            file: 'en.json'
          },
          {
            code: 'ru',
            file: 'ru.json'
          },
          {
            code: 'de',
            file: 'de.json'
          }
        ],
      }
    ],
  ],

  devtools: {
    enabled: false,
  },
})
