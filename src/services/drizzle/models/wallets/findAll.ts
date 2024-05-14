import { Wallet } from "@/services/drizzle/schema"

import { db } from "../../db"

function findAll(): Promise<Wallet[]> {
  return db.query.walletsTable.findMany()
}

export default findAll
