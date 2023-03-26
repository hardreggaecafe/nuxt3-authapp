<template>
    <v-btn color="primary" @click="signOut">Logout</v-btn>
</template>

<script>
export default {
  data(){
    return{
    }
  },
  methods: {
    signOut: function () {
      //const { signUp, token } = useAuth()
      console.log ("signOut")
      const { signOut } = useAuth()
      signOut()
    }
  }
}
</script>