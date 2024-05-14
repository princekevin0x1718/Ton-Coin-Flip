import { db } from "@/services/drizzle/db"
import { NewUser, User, usersTable } from "@/services/drizzle/schema"

function insertMany(data: NewUser[]): Promise<User[]> {
  return db.insert(usersTable).values(data).returning()
}

export default insertMany
