/*
 * Nuxt 3 Config File
 Usage: https://nuxt.com/docs/api/configuration/nuxt-config
 */
export default defineNuxtConfig({

  /**
   * * App Config
   * app config: https://nuxt.com/docs/api/configuration/nuxt-config#app
   * head config: https://nuxt.com/docs/api/configuration/nuxt-config#head
   * meta config: https://nuxt.com/docs/getting-started/seo-meta
   * pageTransition config: https://nuxt.com/docs/getting-started/transitions#transitions
   */
  app: {
    head: {
      title: 'Nuxt 3 PWA Template', // App Window Title
      
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },

        // ...
      ],
      link: [{ rel: 'manifest', href: './manifest.json' }],
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  /**
   * * Nuxt 3 Modules
   * Official modules: https://nuxt.com/modules
   */
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    ['@nuxtjs/color-mode',{
      classSuffix: ""}],
    'nuxt-headlessui',
    'nuxt-icon',
    ['@nuxtjs/i18n',{
      defaultLocale: 'en',
      detectBrowserLanguage: false,
      langDir: 'lang/',
      lazy: true,
      locales: [
        {
          code: 'es',
          file: 'es.json',
          iso: 'es-ES',
          name: 'Español',
        },
        {
          code: 'en',
          file: 'en.json',
          iso: 'en-US',
          name: 'English',
        },
      ]
    }],
  ],
  
  /**
   * * Tailwind CSS Config
   * Options: https://tailwindcss.nuxt.dev/getting-started/options/
   * Docs: https://tailwindcss.nuxt.dev
   */
  tailwindcss: {
    cssPath: '~/assets/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: true, // true to resolve the tailwind config in runtime. https://tailwindcss.nuxt.dev/getting-started/options/#exposeconfig
    injectPosition: 0,
    viewer: true, // set up the /_tailwind/ route. (Disable in production) https://tailwindcss.nuxt.dev/getting-started/options/#viewer
  },

  components: {
    dirs: [
      '~/components',
      '~/components/library'
    ],
  },

  /**
   * * Runtime Config (Environment Variables)
   * Usage: https://nuxt.com/docs/guide/going-further/runtime-config
   */
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api'
    }
  }
})
