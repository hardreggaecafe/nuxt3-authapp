<template>
  <div>
    <h2>profile</h2>
    <p>email:{{ user_data.email }}</p>
  </div>
</template>

<script setup>

const { checkAuthState, user_data } = useAuth()
await checkAuthState()
console.log ("user_uid:"+user_data)

definePageMeta({
  middleware: ['auth']
})
</script>