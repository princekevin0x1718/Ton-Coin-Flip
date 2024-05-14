import axios from "axios"

import { setInitialData } from "./interceptors"

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_URL + "/api/v1",
})

client.interceptors.request.use(setInitialData)

export default client
