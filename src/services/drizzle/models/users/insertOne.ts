import { db } from "@/services/drizzle/db"
import { NewUser, User, usersTable } from "@/services/drizzle/schema"

function insertOne(data: NewUser): Promise<User[]> {
  return db.insert(usersTable).values(data).returning()
}

export default insertOne
