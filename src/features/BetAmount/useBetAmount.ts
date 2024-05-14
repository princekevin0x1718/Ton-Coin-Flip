import { useContext } from "react"

import BetAmountContext from "./BetAmountContext"

function useBetAmount() {
  const context = useContext(BetAmountContext)

  if (typeof context === "undefined") {
    throw new Error(
      "useBetAmount hook must be used with a BetAmountProvider component."
    )
  }

  return context
}

export default useBetAmount
