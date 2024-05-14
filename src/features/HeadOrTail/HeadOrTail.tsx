"use client"

import { useCallback } from "react"

import { HeadOrTailStateEnum } from "@/features/HeadOrTail/HeadOrTailContext"

import useHeadOrTail from "./useHeadOrTail"

function HeadOrTail() {
  const { setHeadOrTail } = useHeadOrTail()

  const headOnClickHandler = useCallback(() => {
    setHeadOrTail(HeadOrTailStateEnum.head)
  }, [setHeadOrTail])
  const tailOnClickHandler = useCallback(() => {
    setHeadOrTail(HeadOrTailStateEnum.tail)
  }, [setHeadOrTail])

  return (
    <section>
      <ul className="flex basis-1/2 gap-4">
        <li
          className="flex-1 bg-amber-200 px-4 py-2"
          onClick={headOnClickHandler}
        >
          head
        </li>
        <li
          className="flex-1 bg-amber-200 px-4 py-2"
          onClick={tailOnClickHandler}
        >
          tail
        </li>
      </ul>
    </section>
  )
}

export default HeadOrTail
