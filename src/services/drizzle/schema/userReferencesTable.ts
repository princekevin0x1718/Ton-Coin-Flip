import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm"
import { integer, pgTable, serial, timestamp, uuid } from "drizzle-orm/pg-core"

import { usersTable } from "./usersTable"

export const userReferencesTable = pgTable("user_references", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .references(() => usersTable.id, { onDelete: "cascade" })
    .notNull(),
  linkReference: uuid("link_reference").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
})

export const userReferencesRelations = relations(
  userReferencesTable,
  ({ one }) => ({
    reference: one(usersTable, {
      fields: [userReferencesTable.linkReference],
      references: [usersTable.linkReference],
    }),
    user: one(usersTable, {
      fields: [userReferencesTable.userId],
      references: [usersTable.id],
    }),
  })
)

export type UserReferences = InferSelectModel<typeof userReferencesTable>
export type NewUserReferences = InferInsertModel<typeof userReferencesTable>
