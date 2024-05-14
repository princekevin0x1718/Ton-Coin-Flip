import { InferInsertModel, InferSelectModel, relations } from "drizzle-orm"
import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  unique,
  varchar,
} from "drizzle-orm/pg-core"

import { transactionsTable } from "./transactionsTable"
import { usersTable } from "./usersTable"

export const walletsTable = pgTable(
  "wallets",
  {
    id: serial("id").primaryKey(),
    userId: integer("user_id")
      .references(() => usersTable.id, { onDelete: "cascade" })
      .notNull(),
    rawAddress: text("raw_address").notNull().unique(),
    address: text("address").notNull().unique(),
    publicKey: text("public_key").unique(),
    chain: varchar("chain_id").notNull(),
    walletStateInit: text("wallet_state_init").notNull(),
    devicePlatform: varchar("device_platform", { length: 64 }),
    deviceAppName: varchar("device_app_name", { length: 128 }),
    deviceAppVersion: varchar("device_version"),
    deviceMaxProtocolVersion: integer("device_max_protocol_version"),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at")
      .defaultNow()
      .$onUpdate(() => new Date()),
  },
  (table) => {
    return {
      userIdRawAddressUnique: unique("userId_rawAddress_unique").on(
        table.userId,
        table.rawAddress
      ),
    }
  }
)

export const walletsRelations = relations(walletsTable, ({ one, many }) => ({
  transactions: many(transactionsTable),
  user: one(usersTable, {
    fields: [walletsTable.userId],
    references: [usersTable.id],
  }),
}))

export type Wallet = InferSelectModel<typeof walletsTable>
export type NewWallet = InferInsertModel<typeof walletsTable>
