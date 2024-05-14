import { eq } from "drizzle-orm"
import { PgRelationalQuery } from "drizzle-orm/pg-core/query-builders/query"

import { db } from "../../db"
import { User, usersTable } from "../../schema"

function findFirstByTelegramUserId(
  id: number
): PgRelationalQuery<User | undefined> {
  return db.query.usersTable.findFirst({
    where: eq(usersTable.telegramUserId, id),
  })
}

export default findFirstByTelegramUserId
