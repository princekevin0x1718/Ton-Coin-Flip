import { db } from "@/services/drizzle/db"
import {
  NewTransaction,
  Transaction,
  transactionsTable,
} from "@/services/drizzle/schema"

function insertOne(data: NewTransaction): Promise<Transaction[]> {
  return db.insert(transactionsTable).values(data).returning()
}

export default insertOne
