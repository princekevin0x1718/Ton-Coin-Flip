import { NextResponse } from "next/server"

import hello from "@/services/drizzle/seed/hello"

export const dynamic = "force-dynamic"

export function GET() {
  hello()

  return NextResponse.json({ message: "success" })
}
