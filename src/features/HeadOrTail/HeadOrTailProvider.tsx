import { ReactNode, useMemo, useState } from "react"

import HeadOrTailContext, { HeadOrTailStateEnum } from "./HeadOrTailContext"

function HeadOrTailProvider({ children }: { children: ReactNode }) {
  const [headOrTail, setHeadOrTail] = useState(HeadOrTailStateEnum.head)

  const value = useMemo(
    () => ({
      headOrTail,
      setHeadOrTail,
    }),
    [headOrTail]
  )

  return (
    <HeadOrTailContext.Provider value={value}>
      {children}
    </HeadOrTailContext.Provider>
  )
}

export default HeadOrTailProvider
