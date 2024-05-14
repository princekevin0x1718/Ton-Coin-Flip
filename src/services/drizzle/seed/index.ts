import { faker } from "@faker-js/faker"

import {
  findAllTransactions,
  insertOneTransaction,
} from "../models/transactions"
import { insertManyUserReferences } from "../models/userReferences"
import { insertManyUsers } from "../models/users"
import { findAllWallets, insertManyWallets } from "../models/wallets"
import { NewUserReferences } from "../schema"
import createRandomTransaction from "../seed/transactions"
import createRandomWallet from "../seed/wallets"
import createRandomUser from "./users"

async function seed() {
  console.info("Start seeding...")

  console.info("Seeding users...")
  const usersCount = 10
  const users = faker.helpers
    .multiple(createRandomUser, { count: usersCount })
    .map((user, idx) => {
      return {
        ...user,
        telegramUserId: 1 + idx,
      }
    })

  const usersResult = await insertManyUsers(users)
  console.info(usersResult)
  console.info("Seeding users ended.")

  console.info("Seeding user references...")
  const fakeUserReferences: NewUserReferences[] = usersResult.map((user) => {
    return {
      userId: user.id,
      linkReference: usersResult[0].linkReference,
    }
  })
  const userReferencesResult =
    await insertManyUserReferences(fakeUserReferences)
  console.info(userReferencesResult)
  console.info("Seeding user references ended.")

  console.info("Seeding wallets...")
  const walletsForUser = 4
  for (const userResult of usersResult) {
    const userWallets = faker.helpers.multiple(
      () => createRandomWallet({ userId: userResult.id }),
      { count: walletsForUser }
    )
    await insertManyWallets(userWallets)
  }
  const walletsResult = await findAllWallets()
  console.info(walletsResult)
  console.info("Seeding wallets ended.")

  console.info("Seeding transactions...")
  for (const userResult of usersResult) {
    await insertOneTransaction(
      createRandomTransaction({
        userId: userResult.id,
        walletId:
          walletsResult.at(
            Math.floor(Math.random() * Math.floor(walletsForUser * usersCount))
          )?.id ?? 0,
      })
    )
  }
  const transactionsResult = await findAllTransactions()
  console.info(transactionsResult)
  console.info("Seeding transactions ended.")

  console.info("Seeding ended.")
}

if (require.main === module) {
  seed()
}

export default seed
