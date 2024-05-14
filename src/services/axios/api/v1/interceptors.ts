import { retrieveLaunchParams } from "@tma.js/sdk"
import { InternalAxiosRequestConfig } from "axios"

export const setInitialData = function (config: InternalAxiosRequestConfig) {
  const { initDataRaw } = retrieveLaunchParams()
  if (initDataRaw) {
    config.headers.set("twa-init-data-raw", initDataRaw)
  }

  return config
}
