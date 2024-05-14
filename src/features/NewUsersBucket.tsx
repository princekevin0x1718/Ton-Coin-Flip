"use client"

import { ReactNode, useEffect, useState } from "react"

import { useInitData, useInitDataRaw, useMiniApp } from "@tma.js/sdk-react"
import { useRouter } from "next/navigation"

import { validateInitialDataRequest } from "@/services/axios/api/v1"

function NewUsersBucket({ children }: { children: ReactNode }) {
  const [shouldRenderChildren, setShouldRenderChildren] = useState(false)
  const miniApp = useMiniApp()
  const initRawData = useInitDataRaw()
  const initData = useInitData()
  const router = useRouter()

  useEffect(() => {
    if (initRawData && initData) {
      const main = async () => {
        try {
          const data = await validateInitialDataRequest(initRawData, initData)
          if (!data.success) {
            router.replace("/store-new-user-failed")
            return
          }

          setShouldRenderChildren(true)
          miniApp.ready()
        } catch (error) {
          console.error(error)

          router.replace("/store-new-user-failed")
        }
      }

      main()
    }
  }, [initData, initRawData, miniApp, router])

  return shouldRenderChildren
    ? children
    : "Loading for initial data validation spinner..."
}

export default NewUsersBucket
