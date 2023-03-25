import { initializeApp } from 'firebase/app'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
  useState('firebaseApp', () => {
    const config = useRuntimeConfig()
    const firebaseConfig = {
      apiKey: config.FIREBASE_API_KEY,
      authDomain: config.FIREBASE_AUTH_DOMAIN,
      projectId: config.FIREBASE_PROJECT_ID,
      storageBucket: config.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: config.FIREBASE_MESSAGE_SENDER_ID,
      appId: config.FIREBASE_APPID,
      measurementId: config.FIREBASE_MEASUREMENT_ID
    }
    return initializeApp(firebaseConfig)
  })
})
