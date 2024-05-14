import { createContext, Dispatch, SetStateAction } from "react"

export enum HeadOrTailStateEnum {
  head = "head",
  tail = "tail",
}

type HeadOrTailContextType = {
  headOrTail: HeadOrTailStateEnum
  setHeadOrTail: Dispatch<SetStateAction<HeadOrTailStateEnum>>
}

const HeadOrTailContext = createContext<HeadOrTailContextType | undefined>(
  undefined
)

export default HeadOrTailContext
