<template>
  <v-card max-width="480px">
    <v-form>
      <v-card-title>
        ログイン
      </v-card-title>
      <v-card-text>
        <v-text-field v-model="email" label="メールアドレス" />
        <v-text-field v-model="password" type="password" label="パスワード" />
        <v-btn color="primary" @click="signIn">
          ログイン
        </v-btn>
      </v-card-text>
    </v-form>
  </v-card>
</template>

<script lang="ts">
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signIn() {
      console.log ("signIn")
      const { signIn, token } = useAuth()
      const result = signIn(this.email, this.password)
      result.then (function(data){
        console.log ("result:" + data)
        console.log ("token:" + token.value)
        if (token.value) {
          navigateTo('/done')
        }else{
          navigateTo('/login')
        }
      })
    },
  }
  }
</script>
