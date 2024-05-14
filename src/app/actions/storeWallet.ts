"use server"

import { db } from "@/services/drizzle/db"
import { findFirstUserByTelegramUserId } from "@/services/drizzle/models/users"
import { NewWallet, walletsTable } from "@/services/drizzle/schema"

async function storeWallet(data: NewWallet) {
  const user = await findFirstUserByTelegramUserId(data.userId)
  if (!user) return { error: "User not found" }

  data.userId = user.id

  console.info(`Adding ${data.address} wallet for user with id ${data.userId}.`)

  await db
    .insert(walletsTable)
    .values(data)
    .onConflictDoNothing({ target: walletsTable.rawAddress }) // TODO: or we should update the row?
}

export default storeWallet
