import { toNano } from "@ton/core"
import { CHAIN, SendTransactionRequest } from "@tonconnect/sdk"

import createPayload from "./createPayload"

function createBetTransaction(): SendTransactionRequest {
  const payload = createPayload({
    $$type: "TonBet",
    queryId: 0n,
    coinSide: 0n, // choose side here, must be 0 or 1
    bet: toNano(0.02), // only createBetTransaction value
  })

  return {
    validUntil: Math.floor(Date.now() / 1000) + 60, // 60 sec,
    network: process.env.NEXT_PUBLIC_CHAIN_ID as unknown as CHAIN | undefined,
    messages: [
      {
        address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS as string,
        amount: toNano(0.021).toString(10), // createBetTransaction value + fee commision
        payload,
      },
    ],
  }
}

export default createBetTransaction
