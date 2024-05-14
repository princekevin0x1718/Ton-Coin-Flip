import { db } from "@/services/drizzle/db"
import {
  NewUserReferences,
  UserReferences,
  userReferencesTable,
} from "@/services/drizzle/schema"

function insertOne(data: NewUserReferences): Promise<UserReferences[]> {
  return db.insert(userReferencesTable).values(data).returning()
}

export default insertOne
