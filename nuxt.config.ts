// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@sidebase/nuxt-auth'],
  auth: {
  enableGlobalAppMiddleware: true,
  origin: 'https://nuxt3-authapp.vercel.app/'
  }
})
