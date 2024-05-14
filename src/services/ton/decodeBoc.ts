import { Cell } from "@ton/ton"

function decodeBoc(boc: string): Cell[] {
  return Cell.fromBoc(Buffer.from(boc, "base64"))
}

export default decodeBoc
