<template>
  <div>
    <h2>profile</h2>
    <p>email:{{ email }}</p>
  </div>
</template>

<script setup>

const { checkAuthState, user_data } = useAuth()
await checkAuthState()
console.log ("user_uid:"+user_data)
//const email = user_data.value.email

definePageMeta({
  middleware: ['auth']
})
</script>