import { faker } from "@faker-js/faker"

import { NewTransaction } from "../schema"

function createRandomTransaction({
  userId,
  walletId,
}: Pick<NewTransaction, "userId" | "walletId">): NewTransaction {
  return {
    userId,
    walletId,
    boc: btoa(faker.string.hexadecimal({ length: 64 })),
  }
}

export default createRandomTransaction
