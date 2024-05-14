import { ReactNode, useMemo, useState } from "react"

import BetAmountContext from "./BetAmountContext"

function BetAmountProvider({ children }: { children: ReactNode }) {
  const [betAmount, setBetAmount] = useState(1)

  const value = useMemo(
    () => ({
      betAmount,
      setBetAmount,
    }),
    [betAmount]
  )

  return (
    <BetAmountContext.Provider value={value}>
      {children}
    </BetAmountContext.Provider>
  )
}

export default BetAmountProvider
