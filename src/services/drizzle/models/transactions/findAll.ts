import { Transaction } from "@/services/drizzle/schema"

import { db } from "../../db"

function findAll(): Promise<Transaction[]> {
  return db.query.transactionsTable.findMany()
}

export default findAll
