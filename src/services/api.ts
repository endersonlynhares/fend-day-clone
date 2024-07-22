import axios from 'axios';
const http = axios.create({
  baseURL: import.meta.env.VITE_URL_API,
  headers: {
    Authorization: import.meta.env.VITE_AUTH_API ? import.meta.env.VITE_AUTH_API : ''
  }
});
export default http