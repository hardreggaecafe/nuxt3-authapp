// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
//  modules: ['@sidebase/nuxt-auth'],
//  auth: {
//    isEnabled: true,
//    origin: 'http://localhost:3000',
//    basePath: '/api/auth',
//    enableSessionRefreshPeriodically: false,
//    enableSessionRefreshOnWindowFocus: true,
//    enableGlobalAppMiddleware: false,
//    defaultProvider: undefined,
//    globalMiddlewareOptions: {
//        allow404WithoutAuth: true
//    }
//  },
  build: {
    transpile: ['vuetify'],
  },
  hooks: {
    'vite:extendConfig': (config) => {
      config.plugins!.push(vuetify())
    },
  },
  vite: {
    ssr: {
      noExternal: ['vuetify'],
    },
    define: {
      'process.env.DEBUG': false,
    },
  },
  css: ['@/assets/main.scss']
})
