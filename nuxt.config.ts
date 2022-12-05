/*
 * Nuxt 3 Config File
 Usage: https://nuxt.com/docs/api/configuration/nuxt-config
 */
// 
export default defineNuxtConfig({

  /**
   * * App Config
   * pageTransition config: https://nuxt.com/docs/getting-started/transitions#transitions
   */
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  /**
   * * Nuxt 3 Modules
   * All modules: https://nuxt.com/modules
   */
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  
  /**
   * * Tailwind CSS Config
   * Options: https://tailwindcss.nuxt.dev/getting-started/options/
   */
  tailwindcss: {
    cssPath: '~/assets/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
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
