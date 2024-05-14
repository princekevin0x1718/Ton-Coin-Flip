"use client"

import { useMemo } from "react"

import { useInitData } from "@tma.js/sdk-react"

function InitData() {
  const initData = useInitData()

  const initDataJson = useMemo(() => {
    if (!initData) {
      return "Init data is empty."
    }
    const {
      authDate,
      chat,
      hash,
      canSendAfter,
      queryId,
      receiver,
      user,
      startParam,
    } = initData

    return JSON.stringify(
      {
        authDate,
        chat,
        hash,
        canSendAfter,
        queryId,
        receiver,
        user,
        startParam,
      },
      null,
      " "
    )
  }, [initData])

  return (
    <div>
      <pre className="text-red-500">
        <code>{initDataJson}</code>
      </pre>
    </div>
  )
}

export default InitData
