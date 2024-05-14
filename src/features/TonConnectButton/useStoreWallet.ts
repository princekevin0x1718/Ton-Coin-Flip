import { useEffect } from "react"

import { useInitData } from "@tma.js/sdk-react"
import { useTonAddress, useTonWallet } from "@tonconnect/ui-react"

import storeWallet from "@/app/actions/storeWallet"
import { NewWallet } from "@/services/drizzle/schema"

function useStoreWallet() {
  const wallet = useTonWallet()
  const userFriendlyAddress = useTonAddress()
  const initData = useInitData()

  useEffect(() => {
    if (wallet?.account && userFriendlyAddress && initData?.user?.id) {
      const walletData: NewWallet = {
        userId: initData.user.id,
        rawAddress: wallet.account.address,
        address: userFriendlyAddress,
        publicKey: wallet.account.publicKey,
        chain: wallet.account.chain,
        walletStateInit: wallet.account.walletStateInit,
        devicePlatform: wallet.device.platform,
        deviceAppName: wallet.device.appName,
        deviceAppVersion: wallet.device.appVersion,
        deviceMaxProtocolVersion: wallet.device.maxProtocolVersion,
      }
      storeWallet(walletData)
    }
  }, [initData?.user?.id, userFriendlyAddress, wallet])
}

export default useStoreWallet
