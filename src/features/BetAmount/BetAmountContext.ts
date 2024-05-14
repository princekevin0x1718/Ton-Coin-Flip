import { createContext, Dispatch, SetStateAction } from "react"

type BetAmountContextType = {
  betAmount: number
  setBetAmount: Dispatch<SetStateAction<number>>
}

const BetAmountContext = createContext<BetAmountContextType | undefined>(
  undefined
)

export default BetAmountContext
