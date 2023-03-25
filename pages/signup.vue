<template>
  <v-card max-width="480px">
    <v-form>
      <v-card-title>
        ユーザ登録
      </v-card-title>
      <v-card-text>
        <v-text-field v-model="email" label="メールアドレス" />
        <v-text-field v-model="password" type="password" label="パスワード" />
        <v-btn color="primary" @click="signUp">
          登録
        </v-btn>
      </v-card-text>
    </v-form>
  </v-card>
</template>

<script lang="ts" >
export default {
  data(){
    return{
      email: "",
      password: ""
    }
  },
  methods: {
    signUp: function () {
      const { signUp, token } = useAuth()
      const status = signUp(this.email, this.password)
    },
  }
}

definePageMeta({
  middleware: ['auth']
})
</script>
