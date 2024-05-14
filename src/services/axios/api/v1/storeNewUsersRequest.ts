import { InitData } from "@tma.js/sdk"

import client from "./client"

interface IValidateInitialData {
  error?: string
  success?: string
}

async function storeNewUsersRequest(initRawData: string, initData: InitData) {
  const data = await client.post<IValidateInitialData>("/store-new-user", {
    initRawData,
    initData,
  })

  return data.data
}

export default storeNewUsersRequest
