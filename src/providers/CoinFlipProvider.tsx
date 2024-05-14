"use client"

import { ReactNode } from "react"

import BetAmountProvider from "@/features/BetAmount/BetAmountProvider"
import HeadOrTailProvider from "@/features/HeadOrTail/HeadOrTailProvider"

function CoinFlipProvider({ children }: { children: ReactNode }) {
  return (
    <BetAmountProvider>
      <HeadOrTailProvider>{children}</HeadOrTailProvider>
    </BetAmountProvider>
  )
}

export default CoinFlipProvider
