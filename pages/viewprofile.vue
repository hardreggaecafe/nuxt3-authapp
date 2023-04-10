<template>
  <div>
    <h2>profile</h2>
    <p>email:{{ email }}</p>
  </div>
</template>

<script setup>

const { checkAuthState, token, user_data } = useAuth()
await checkAuthState()
console.log ("token:"+token.value)
console.log ("user_data:"+user_data.email)

//const email = user_data.value.email

definePageMeta({
  middleware: ['auth']
})
</script>