<template>
    <v-card max-width="480px">
      <v-card-title>
        ログアウトします。よろしいですか？
      </v-card-title>
      <v-card-text>
        <v-btn to="/" nuxt>
          トップページ
        </v-btn>
        <v-btn color="primary" @click="logout">
          ログアウト
        </v-btn>
      </v-card-text>
    </v-card>
  </template>
  
  <script lang="ts">
  export default {
    middleware: 'auth', // TODO: ログインページでnotice表示「既にログアウト済みです。」
  
    methods: {
      logout () {
        this.$auth.logout() // TODO: ログインページでnotice表示「ログアウトしました。」
      }
    }
  }
  </script>