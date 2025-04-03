// External Libraries
import axios from 'axios'

export const SW_API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SW_BASE_URL
  //   headers: { 'X-API-KEY': process.env.NEXT_PUBLIC_X_API_KEY }
})

// SW_API.interceptors.request.use(async function (config) {
//   try {

//     if (config && config.headers) {
//       config.headers.Authorization = token
//     }
//     return config
//   } catch (e) {
//     return config
//   }
// })
