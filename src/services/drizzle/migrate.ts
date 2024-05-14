import { migrate } from "drizzle-orm/node-postgres/migrator"

import { db, pool } from "./db"

export default async function main() {
  await migrate(db, {
    migrationsFolder: "./src/services/drizzle/db-migrations",
  })
  await pool.end()
}

if (require.main === module) {
  main()
}
