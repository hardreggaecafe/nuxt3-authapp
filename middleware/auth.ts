export default defineNuxtRouteMiddleware(async () => {
  if (!process.server) {
    const { checkAuthState, token } = useAuth()
    await checkAuthState()
    console.log ("token:"+token)
    if (!token.value) {
      return navigateTo('/login', { replace: true })
    }
  }
})
