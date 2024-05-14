import { db } from "@/services/drizzle/db"
import {
  NewUserReferences,
  userReferencesTable,
} from "@/services/drizzle/schema"

function insertMany(data: NewUserReferences[]): Promise<NewUserReferences[]> {
  return db.insert(userReferencesTable).values(data).returning()
}

export default insertMany
