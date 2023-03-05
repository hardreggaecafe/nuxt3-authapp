// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@sidebase/nuxt-auth'],
  auth: {
  enableGlobalAppMiddleware: true,
  origin: 'http://localhost:3000'
  }
})
