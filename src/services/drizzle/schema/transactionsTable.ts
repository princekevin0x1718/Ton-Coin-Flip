import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm"
import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core"

import { usersTable } from "./usersTable"
import { walletsTable } from "./walletsTable"

export const transactionsTable = pgTable("transactions", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .references(() => usersTable.id, { onDelete: "cascade" })
    .notNull(),
  walletId: integer("wallet_id")
    .references(() => walletsTable.id, { onDelete: "cascade" })
    .notNull(),
  boc: text("boc").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow(),
})

export const transactionsRelations = relations(
  transactionsTable,
  ({ one }) => ({
    user: one(usersTable, {
      fields: [transactionsTable.userId],
      references: [usersTable.id],
    }),
    wallet: one(walletsTable, {
      fields: [transactionsTable.walletId],
      references: [walletsTable.id],
    }),
  })
)

export type Transaction = InferSelectModel<typeof transactionsTable>
export type NewTransaction = InferInsertModel<typeof transactionsTable>
