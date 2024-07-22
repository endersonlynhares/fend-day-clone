import axios, { type AxiosInstance } from 'axios'
import type {App} from 'vue'


interface AxiosOptions {
  baseUrl?: string,
  token?: string
}

export default {
  install: (app: App, options: AxiosOptions) => {
    const axiosInstance = axios.create({
      baseURL: options.baseUrl,
      headers: {
        Authorization: options.token ? `${options.token}` : ''
      }
    })
    app.config.globalProperties.$axios = axiosInstance
    app.provide('axios', axiosInstance)
  }
}