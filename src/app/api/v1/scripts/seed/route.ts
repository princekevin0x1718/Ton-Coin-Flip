import { NextResponse } from "next/server"

import main from "@/services/drizzle/seed"

export const dynamic = "force-dynamic"

export async function GET() {
  await main()

  return NextResponse.json({ message: "success" })
}
