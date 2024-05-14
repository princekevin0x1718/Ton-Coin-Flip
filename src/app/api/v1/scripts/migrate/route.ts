import { NextResponse } from "next/server"

import main from "@/services/drizzle/migrate"

export const dynamic = "force-dynamic"

// https://github.com/drizzle-team/drizzle-orm/issues/680
export async function GET() {
  await main()

  return NextResponse.json({ message: "success" })
}
