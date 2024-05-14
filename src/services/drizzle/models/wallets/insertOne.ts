import { db } from "@/services/drizzle/db"
import { NewWallet, Wallet, walletsTable } from "@/services/drizzle/schema"

function insertOne(data: NewWallet): Promise<Wallet[]> {
  return db.insert(walletsTable).values(data).returning()
}

export default insertOne
