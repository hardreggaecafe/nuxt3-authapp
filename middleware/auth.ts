export default defineNuxtRouteMiddleware(async () => {
  if (!process.server) {
    const { checkAuthState, token } = useAuth()
    await checkAuthState()
    if (!token.value) {
      return navigateTo('/login', { replace: true })
    }
  }
})
