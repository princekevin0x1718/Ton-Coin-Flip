"use client"

import { useCallback } from "react"

import { useTonConnectUI } from "@tonconnect/ui-react"
import "buffer"

import useBetAmount from "@/features/BetAmount/useBetAmount"
import useHeadOrTail from "@/features/HeadOrTail/useHeadOrTail"
import decodeBoc from "@/services/ton/decodeBoc"
import { createBetTransaction } from "@/services/ton/transactions"

function FlipTheCoin() {
  const [tonConnectUI] = useTonConnectUI()

  const { betAmount } = useBetAmount()
  const { headOrTail } = useHeadOrTail()
  console.log({ betAmount, headOrTail })

  const onButtonClick = useCallback(async () => {
    const myTransaction = createBetTransaction()
    const data = await tonConnectUI.sendTransaction(myTransaction)

    console.log(data)
    const cell = decodeBoc(data.boc)
    console.log(cell)
  }, [tonConnectUI])

  return <button onClick={onButtonClick}>flip</button>
}

export default FlipTheCoin
