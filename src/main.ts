import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from './plugins/axios'

const app = createApp(App)

app.use(createPinia())
app.use(axios, {
  baseUrl: import.meta.env.VITE_URL_API,
  token: import.meta.env.VITE_AUTH_API
})
app.use(router)

app.mount('#app')
