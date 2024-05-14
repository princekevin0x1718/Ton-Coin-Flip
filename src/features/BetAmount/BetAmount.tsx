"use client"

import { MouseEvent, useCallback } from "react"

import useBetAmount from "@/features/BetAmount/useBetAmount"

function BetAmount() {
  const { setBetAmount } = useBetAmount()

  const onClickHandler = useCallback(
    (event: MouseEvent<HTMLLIElement>) => {
      const amount = event.currentTarget.dataset.amount
      if (amount) {
        const betAmountInt = parseFloat(amount)
        if (isNaN(betAmountInt)) return

        setBetAmount(betAmountInt)
      }
    },
    [setBetAmount]
  )

  return (
    <section className="max-w-2xl">
      <h4 className="text-1xl font-black tracking-wide">Bet amount</h4>
      <ul className="grid grid-cols-3 gap-4">
        <li
          className="bg-amber-300 px-2 py-0.5"
          data-amount="0.1"
          onClick={onClickHandler}
        >
          0.1
        </li>
        <li
          className="bg-amber-300 px-2 py-0.5"
          data-amount="0.2"
          onClick={onClickHandler}
        >
          0.2
        </li>
        <li
          className="bg-amber-300 px-2 py-0.5"
          data-amount="0.5"
          onClick={onClickHandler}
        >
          0.5
        </li>
        <li
          className="bg-amber-300 px-2 py-0.5"
          data-amount="1"
          onClick={onClickHandler}
        >
          1
        </li>
        <li
          className="bg-amber-300 px-2 py-0.5"
          data-amount="2"
          onClick={onClickHandler}
        >
          2
        </li>
        <li
          className="bg-amber-300 px-2 py-0.5"
          data-amount="5"
          onClick={onClickHandler}
        >
          5
        </li>
      </ul>
    </section>
  )
}

export default BetAmount
