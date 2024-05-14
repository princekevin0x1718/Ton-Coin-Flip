import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm"
import {
  integer,
  pgTable,
  serial,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core"

import { transactionsTable } from "./transactionsTable"
import { userReferencesTable } from "./userReferencesTable"

export const usersTable = pgTable("users", {
  id: serial("id").primaryKey(),
  telegramUserId: integer("telegram_user_id").unique().notNull(),
  username: varchar("username", { length: 255 }),
  firstName: varchar("first_name", { length: 255 }).notNull(),
  lastName: varchar("last_name", { length: 255 }),
  imageUrl: varchar("image_url", { length: 255 }),
  linkReference: uuid("link_reference").unique().defaultRandom().notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date()),
})

export const usersRelations = relations(usersTable, ({ many }) => ({
  transactions: many(transactionsTable),
  references: many(userReferencesTable),
}))

export type User = InferSelectModel<typeof usersTable>
export type NewUser = InferInsertModel<typeof usersTable>
