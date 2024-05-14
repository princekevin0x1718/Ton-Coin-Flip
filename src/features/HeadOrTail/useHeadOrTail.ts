import { useContext } from "react"

import HeadOrTailContext from "./HeadOrTailContext"

function useHeadOrTail() {
  const context = useContext(HeadOrTailContext)

  if (typeof context === "undefined") {
    throw new Error(
      "useHeadOrTail hook must be used with a HeadOrTailProvider component."
    )
  }

  return context
}

export default useHeadOrTail
