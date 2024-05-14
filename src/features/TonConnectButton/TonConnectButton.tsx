"use client"

import { TonConnectButton as TonConnectBtn } from "@tonconnect/ui-react"

import useStoreWallet from "@/features/TonConnectButton/useStoreWallet"

function TonConnectButton() {
  useStoreWallet()

  return <TonConnectBtn />
}

export default TonConnectButton
