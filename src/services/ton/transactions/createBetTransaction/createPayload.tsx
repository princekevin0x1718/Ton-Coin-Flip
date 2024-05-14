import { beginCell } from "@ton/ton"

type TonBet = {
  $$type: "TonBet"
  queryId: bigint
  coinSide: bigint
  bet: bigint
}

function createPayload(data: TonBet): string {
  return beginCell()
    .storeUint(2611132285, 32)
    .storeUint(data.queryId, 64)
    .storeUint(data.coinSide, 8)
    .storeUint(data.bet, 256)
    .endCell()
    .toBoc()
    .toString("base64")
}

export default createPayload
