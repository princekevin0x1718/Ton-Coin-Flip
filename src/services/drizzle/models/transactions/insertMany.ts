import { db } from "@/services/drizzle/db"
import {
  NewTransaction,
  Transaction,
  transactionsTable,
} from "@/services/drizzle/schema"

const insertMany = (data: NewTransaction[]): Promise<Transaction[]> =>
  db.insert(transactionsTable).values(data).returning()

export default insertMany
